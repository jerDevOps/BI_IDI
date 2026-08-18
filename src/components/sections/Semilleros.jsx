import { useState, useMemo } from 'react';
import { Sprout, Search, TrendingUp, ArrowUpRight } from 'lucide-react';
import YearFilter from '../ui/YearFilter';
import Badge from '../ui/Badge';
import {
  semillerosEvolucion, semilleros2023, semilleros2024, semilleros2025, semilleros2026
} from '../../data/data';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
  ComposedChart, Line, PieChart, Pie, Legend
} from 'recharts';

const FACULTAD_COLORS = [
  '#2e7d32','#43a047','#66bb6a','#558b2f','#8bc34a',
  '#388e3c','#a5d6a7','#0288d1','#f57c00','#6d4c41',
  '#ab47bc','#1976d2','#e53935','#00695c','#546e7a',
  '#bf360c','#4527a0','#00838f','#827717','#4e342e',
];

const shortFacultad = (f = '') =>
  f.replace(/INGENIERÍA /gi,'Ing. ')
   .replace(/CIENCIAS DE LA /gi,'C. ')
   .replace(/CIENCIAS /gi,'C. ')
   .replace(/FACULTAD /gi,'')
   .replace(/ Y SISTEMAS/gi,'')
   .replace(/BIOLÓCAS/gi,'Biológicas')
   .slice(0, 30);

const REND_TOOLTIP = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ background:'#fff', border:'1px solid #c8e6c9', borderRadius:10, padding:'10px 14px', boxShadow:'0 4px 16px rgba(46,125,50,0.13)', fontSize:13 }}>
      <div style={{ fontWeight:700, color:'#1b5e20', marginBottom:4 }}>{payload[0]?.payload?.fullName || payload[0]?.name}</div>
      <div style={{ color:'#37474f' }}>Semilleros: <strong style={{ color:'#2e7d32' }}>{payload[0]?.value}</strong></div>
      {payload[0]?.payload?.pct && <div style={{ color:'#78909c', fontSize:12 }}>{payload[0].payload.pct}% del total</div>}
    </div>
  );
};

export default function Semilleros() {
  const [activeYear, setActiveYear] = useState(2026);
  const [search, setSearch] = useState('');

  const listByYear = {
    2023: semilleros2023, 2024: semilleros2024,
    2025: semilleros2025, 2026: semilleros2026,
  };
  const currentList = listByYear[activeYear] || [];
  const total = currentList.length;

  // Aggregate by facultad
  const byFacultad = useMemo(() => {
    const map = {};
    currentList.forEach(s => {
      const k = s.facultad || 'Sin Facultad';
      map[k] = (map[k] || 0) + 1;
    });
    return Object.entries(map)
      .map(([f, c]) => ({ facultad: shortFacultad(f), fullName: f, cantidad: c, pct: ((c/total)*100).toFixed(1) }))
      .sort((a, b) => b.cantidad - a.cantidad);
  }, [currentList, total]);

  // Pie data (top 8 + otros)
  const pieData = useMemo(() => {
    const top = byFacultad.slice(0, 8);
    const rest = byFacultad.slice(8).reduce((s, x) => s + x.cantidad, 0);
    return rest > 0 ? [...top, { facultad: 'Otras', cantidad: rest, pct: ((rest/total)*100).toFixed(1) }] : top;
  }, [byFacultad, total]);

  // Filtered table
  const filtered = useMemo(() =>
    currentList.filter(s =>
      s.nombre?.toLowerCase().includes(search.toLowerCase()) ||
      s.facultad?.toLowerCase().includes(search.toLowerCase()) ||
      s.ep?.toLowerCase().includes(search.toLowerCase())
    ), [currentList, search]);

  const currentEv = semillerosEvolucion.find(e => e.anio === activeYear);
  const prevEv = semillerosEvolucion.find(e => e.anio === activeYear - 1);
  const growthPct = prevEv && prevEv.total > 0 ? (((currentEv?.total - prevEv.total) / prevEv.total) * 100).toFixed(0) : null;

  return (
    <div className="animate-fade-in-up stagger-children">
      {/* Header */}
      <div className="section-header">
        <div className="section-icon">
          <Sprout size={22} style={{ color: 'var(--color-primary)' }} />
        </div>
        <div className="flex-1">
          <h2 className="section-title">Semilleros de Investigación</h2>
          <p className="section-subtitle">Fomento a la investigación temprana en estudiantes de pregrado — UNA Puno</p>
        </div>
        <YearFilter years={[2023, 2024, 2025, 2026]} activeYear={activeYear} onChange={setActiveYear} />
      </div>

      {/* KPI Row */}
      <div className="grid grid-4 gap-4 mb-6">
        <div className="kpi-card" style={{ '--kpi-color': '#2e7d32' }}>
          <div style={{ fontSize:'0.75rem', fontWeight:700, color:'#78909c', textTransform:'uppercase', letterSpacing:'0.07em', marginBottom:8 }}>Total Semilleros</div>
          <div className="stat-number" style={{ fontSize:'2.8rem', color:'#2e7d32' }}>{total}</div>
          {growthPct && <div className="trend trend-up mt-2"><ArrowUpRight size={13}/> +{growthPct}% vs {activeYear-1}</div>}
        </div>
        <div className="kpi-card" style={{ '--kpi-color': '#43a047' }}>
          <div style={{ fontSize:'0.75rem', fontWeight:700, color:'#78909c', textTransform:'uppercase', letterSpacing:'0.07em', marginBottom:8 }}>Nuevos {activeYear}</div>
          <div className="stat-number" style={{ fontSize:'2.8rem', color:'#43a047' }}>{currentEv?.nuevos || '-'}</div>
          <div style={{ fontSize:'0.78rem', color:'#78909c', marginTop:4 }}>Reconocidos en el año</div>
        </div>
        <div className="kpi-card" style={{ '--kpi-color': '#558b2f' }}>
          <div style={{ fontSize:'0.75rem', fontWeight:700, color:'#78909c', textTransform:'uppercase', letterSpacing:'0.07em', marginBottom:8 }}>Facultades</div>
          <div className="stat-number" style={{ fontSize:'2.8rem', color:'#558b2f' }}>{byFacultad.length}</div>
          <div style={{ fontSize:'0.78rem', color:'#78909c', marginTop:4 }}>Con semilleros activos</div>
        </div>
        <div className="kpi-card" style={{ '--kpi-color': '#0288d1' }}>
          <div style={{ fontSize:'0.75rem', fontWeight:700, color:'#78909c', textTransform:'uppercase', letterSpacing:'0.07em', marginBottom:8 }}>Mayor concentración</div>
          <div style={{ fontSize:'1.05rem', fontWeight:800, color:'#0288d1', lineHeight:1.3, marginTop:4 }}>
            {byFacultad[0]?.fullName?.slice(0,35) || '-'}
          </div>
          <div style={{ fontSize:'0.78rem', color:'#78909c', marginTop:4 }}>{byFacultad[0]?.cantidad} semilleros ({byFacultad[0]?.pct}%)</div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-2 gap-6 mb-6">
        {/* Evolution bar+line */}
        <div className="card">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="chart-title">Evolución Acumulada 2023–2026</h3>
              <p className="chart-subtitle">Crecimiento total de semilleros reconocidos</p>
            </div>
            <div className="trend trend-up"><TrendingUp size={13}/> +10,700% desde 2023</div>
          </div>
          <div className="chart-container" style={{ height: 240 }}>
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={semillerosEvolucion} margin={{ top:10, right:20, bottom:0, left:-10 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e8f5e9" />
                <XAxis dataKey="anio" tick={{ fill:'#78909c', fontSize:12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill:'#78909c', fontSize:12 }} axisLine={false} tickLine={false} />
                <Tooltip content={<REND_TOOLTIP />} />
                <Bar dataKey="total" name="Total" barSize={42} radius={[6,6,0,0]}>
                  {semillerosEvolucion.map((e, i) => (
                    <Cell key={i} fill={e.anio === activeYear ? '#2e7d32' : '#a5d6a7'} />
                  ))}
                </Bar>
                <Line type="monotone" dataKey="total" stroke="#1b5e20" strokeWidth={2} dot={{ r:4, fill:'#1b5e20', strokeWidth:0 }} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Donut pie */}
        <div className="card">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="chart-title">Distribución por Facultad ({activeYear})</h3>
              <p className="chart-subtitle">Porcentaje de semilleros según unidad académica</p>
            </div>
            <span className="badge badge-green">{total} total</span>
          </div>
          <div style={{ display:'flex', gap:16, height:240 }}>
            <div style={{ flex:'0 0 160px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} dataKey="cantidad" cx="50%" cy="50%" innerRadius={48} outerRadius={75} paddingAngle={2}>
                    {pieData.map((_, i) => <Cell key={i} fill={FACULTAD_COLORS[i % FACULTAD_COLORS.length]} />)}
                  </Pie>
                  <Tooltip formatter={(v, _, p) => [`${v} (${p.payload.pct}%)`, 'Semilleros']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div style={{ flex:1, overflowY:'auto', paddingRight:4 }}>
              {pieData.map((d, i) => (
                <div key={i} className="legend-row">
                  <div className="legend-dot" style={{ background: FACULTAD_COLORS[i % FACULTAD_COLORS.length] }} />
                  <div className="legend-label text-xs" style={{ color:'#37474f' }}>{d.facultad}</div>
                  <div className="legend-value">{d.cantidad}</div>
                  <div className="legend-pct">{d.pct}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Top Facultades bar horizontal */}
      <div className="card mb-6">
        <h3 className="chart-title mb-1">Ranking de Facultades por Semilleros ({activeYear})</h3>
        <p className="chart-subtitle">Top 10 facultades con mayor número de semilleros reconocidos</p>
        <div style={{ height: 280 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={byFacultad.slice(0,10)} layout="vertical" margin={{ top:5, right:50, left:10, bottom:5 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={true} stroke="#e8f5e9" />
              <XAxis type="number" tick={{ fill:'#78909c', fontSize:11 }} axisLine={false} tickLine={false} />
              <YAxis dataKey="facultad" type="category" width={140} tick={{ fill:'#37474f', fontSize:11 }} axisLine={false} tickLine={false} />
              <Tooltip content={<REND_TOOLTIP />} />
              <Bar dataKey="cantidad" name="Semilleros" radius={[0,6,6,0]} label={{ position:'right', fill:'#2e7d32', fontSize:12, fontWeight:700 }}>
                {byFacultad.slice(0,10).map((_, i) => (
                  <Cell key={i} fill={FACULTAD_COLORS[i % FACULTAD_COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Directorio filtrable */}
      <div className="card">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="chart-title">Directorio de Semilleros ({activeYear})</h3>
            <p className="chart-subtitle">{filtered.length} de {total} semilleros</p>
          </div>
          <div className="search-input" style={{ width:260 }}>
            <Search size={15} style={{ color:'#78909c', flexShrink:0 }} />
            <input placeholder="Buscar semillero, facultad..." value={search} onChange={e => setSearch(e.target.value)} />
          </div>
        </div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre del Semillero</th>
                <th>Facultad</th>
                <th>Escuela Profesional</th>
                <th>R.R.</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((s, i) => (
                <tr key={i}>
                  <td style={{ color:'#78909c', fontWeight:600 }}>{s.n}</td>
                  <td style={{ fontWeight:600, color:'#1b2e1b' }}>{s.nombre}</td>
                  <td><Badge variant="green">{s.facultad}</Badge></td>
                  <td style={{ fontSize:'0.8rem', color:'#546e7a' }}>{s.ep}</td>
                  <td style={{ fontSize:'0.75rem', fontFamily:'monospace', color:'#78909c' }}>{s.rr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

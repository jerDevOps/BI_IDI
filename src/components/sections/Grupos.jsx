import { useState, useMemo } from 'react';
import { Users, Search, ArrowUpRight, BarChart2 } from 'lucide-react';
import YearFilter from '../ui/YearFilter';
import Badge from '../ui/Badge';
import { grupos, gruposEvolucion } from '../../data/data';
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  ComposedChart, Line
} from 'recharts';

const COLORS = [
  '#2e7d32','#43a047','#558b2f','#66bb6a','#8bc34a',
  '#388e3c','#0288d1','#f57c00','#6d4c41','#ab47bc',
  '#1976d2','#e53935','#00695c','#546e7a','#bf360c',
];

const shortFac = (f = '') =>
  f.replace(/Ingeniería /gi,'Ing. ')
   .replace(/Ciencias de la /gi,'C. ')
   .replace(/Ciencias /gi,'C. ')
   .replace(/ y Sistemas/gi,'')
   .replace(/Eléctrica, Electrónica Y Sistemas/gi,'Eléct./Sist.')
   .slice(0, 28);

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const d = payload[0]?.payload;
  return (
    <div style={{ background:'#fff', border:'1px solid #c8e6c9', borderRadius:10, padding:'10px 14px', boxShadow:'0 4px 16px rgba(46,125,50,0.13)', fontSize:13 }}>
      <div style={{ fontWeight:700, color:'#1b5e20', marginBottom:4 }}>{d?.fullName || d?.facultad}</div>
      <div style={{ color:'#37474f' }}>Grupos: <strong style={{ color:'#2e7d32' }}>{payload[0]?.value}</strong></div>
      {d?.pct && <div style={{ color:'#78909c', fontSize:12 }}>{d.pct}% del total</div>}
    </div>
  );
};

export default function Grupos() {
  const [activeYear, setActiveYear] = useState(2026);
  const [search, setSearch] = useState('');

  const activeGrupos = grupos.filter(g => g.anioReconocimiento <= activeYear);
  const total = activeGrupos.length;

  const byFacultad = useMemo(() => {
    const map = {};
    activeGrupos.forEach(g => {
      const k = g.facultad || 'Sin Facultad';
      map[k] = (map[k] || 0) + 1;
    });
    return Object.entries(map)
      .map(([f, c]) => ({ facultad: shortFac(f), fullName: f, cantidad: c, pct: ((c/total)*100).toFixed(1) }))
      .sort((a, b) => b.cantidad - a.cantidad);
  }, [activeGrupos, total]);

  const pieData = useMemo(() => {
    const top = byFacultad.slice(0, 9);
    const rest = byFacultad.slice(9).reduce((s, x) => s + x.cantidad, 0);
    return rest > 0 ? [...top, { facultad: 'Otras', fullName: 'Otras facultades', cantidad: rest, pct: ((rest/total)*100).toFixed(1) }] : top;
  }, [byFacultad, total]);

  const filtered = useMemo(() =>
    activeGrupos.filter(g =>
      g.nombre?.toLowerCase().includes(search.toLowerCase()) ||
      g.facultad?.toLowerCase().includes(search.toLowerCase()) ||
      g.ep?.toLowerCase().includes(search.toLowerCase())
    ), [activeGrupos, search]);

  const evData = gruposEvolucion;
  const currentEv = evData.find(e => e.anio === activeYear);
  const prevEv = evData.find(e => e.anio === activeYear - 1);
  const growthPct = prevEv && prevEv.total > 0
    ? (((currentEv?.total - prevEv.total) / prevEv.total) * 100).toFixed(0) : null;

  return (
    <div className="animate-fade-in-up stagger-children">
      {/* Header */}
      <div className="section-header">
        <div className="section-icon">
          <Users size={22} style={{ color: 'var(--color-primary)' }} />
        </div>
        <div className="flex-1">
          <h2 className="section-title">Grupos de Investigación</h2>
          <p className="section-subtitle">Equipos multidisciplinarios de investigación reconocidos por la UNA Puno</p>
        </div>
        <YearFilter years={[2024, 2025, 2026]} activeYear={activeYear} onChange={setActiveYear} />
      </div>

      {/* KPI Row */}
      <div className="grid grid-4 gap-4 mb-6">
        <div className="kpi-card" style={{ '--kpi-color': '#2e7d32' }}>
          <div style={{ fontSize:'0.75rem', fontWeight:700, color:'#78909c', textTransform:'uppercase', letterSpacing:'0.07em', marginBottom:8 }}>Total Grupos</div>
          <div className="stat-number" style={{ fontSize:'2.8rem', color:'#2e7d32' }}>{total}</div>
          {growthPct && <div className="trend trend-up mt-2"><ArrowUpRight size={13}/> +{growthPct}% vs {activeYear-1}</div>}
        </div>
        <div className="kpi-card" style={{ '--kpi-color': '#43a047' }}>
          <div style={{ fontSize:'0.75rem', fontWeight:700, color:'#78909c', textTransform:'uppercase', letterSpacing:'0.07em', marginBottom:8 }}>Nuevos {activeYear}</div>
          <div className="stat-number" style={{ fontSize:'2.8rem', color:'#43a047' }}>{currentEv?.nuevos || '-'}</div>
          <div style={{ fontSize:'0.78rem', color:'#78909c', marginTop:4 }}>Reconocidos este año</div>
        </div>
        <div className="kpi-card" style={{ '--kpi-color': '#558b2f' }}>
          <div style={{ fontSize:'0.75rem', fontWeight:700, color:'#78909c', textTransform:'uppercase', letterSpacing:'0.07em', marginBottom:8 }}>Facultades</div>
          <div className="stat-number" style={{ fontSize:'2.8rem', color:'#558b2f' }}>{byFacultad.length}</div>
          <div style={{ fontSize:'0.78rem', color:'#78909c', marginTop:4 }}>Con grupos activos</div>
        </div>
        <div className="kpi-card" style={{ '--kpi-color': '#0288d1' }}>
          <div style={{ fontSize:'0.75rem', fontWeight:700, color:'#78909c', textTransform:'uppercase', letterSpacing:'0.07em', marginBottom:8 }}>Mayor concentración</div>
          <div style={{ fontSize:'1.0rem', fontWeight:800, color:'#0288d1', lineHeight:1.3, marginTop:4 }}>
            {byFacultad[0]?.fullName?.slice(0,35) || '-'}
          </div>
          <div style={{ fontSize:'0.78rem', color:'#78909c', marginTop:4 }}>{byFacultad[0]?.cantidad} grupos ({byFacultad[0]?.pct}%)</div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-2 gap-6 mb-6">
        {/* Evolution */}
        <div className="card">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="chart-title">Evolución de Grupos 2024–2026</h3>
              <p className="chart-subtitle">Crecimiento total de grupos reconocidos</p>
            </div>
            <div className="badge badge-green"><BarChart2 size={12}/> Acumulado</div>
          </div>
          <div style={{ height: 240 }}>
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={evData} margin={{ top:10, right:20, bottom:0, left:-10 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e8f5e9" />
                <XAxis dataKey="anio" tick={{ fill:'#78909c', fontSize:12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill:'#78909c', fontSize:12 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="total" name="Total" barSize={44} radius={[6,6,0,0]}>
                  {evData.map((e, i) => (
                    <Cell key={i} fill={e.anio === activeYear ? '#2e7d32' : '#a5d6a7'} />
                  ))}
                </Bar>
                <Bar dataKey="nuevos" name="Nuevos" barSize={20} radius={[4,4,0,0]} fill="#8bc34a" fillOpacity={0.7} />
                <Line type="monotone" dataKey="total" stroke="#1b5e20" strokeWidth={2} dot={{ r:4, fill:'#1b5e20' }} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Donut */}
        <div className="card">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="chart-title">Distribución por Facultad ({activeYear})</h3>
              <p className="chart-subtitle">% de grupos por unidad académica</p>
            </div>
            <span className="badge badge-green">{total} grupos</span>
          </div>
          <div style={{ display:'flex', gap:12, height:240 }}>
            <div style={{ flex:'0 0 155px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} dataKey="cantidad" cx="50%" cy="50%" innerRadius={45} outerRadius={72} paddingAngle={2}>
                    {pieData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                  </Pie>
                  <Tooltip formatter={(v, _, p) => [`${v} (${p.payload.pct}%)`, 'Grupos']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div style={{ flex:1, overflowY:'auto' }}>
              {pieData.map((d, i) => (
                <div key={i} className="legend-row">
                  <div className="legend-dot" style={{ background: COLORS[i % COLORS.length] }} />
                  <div className="legend-label text-xs" style={{ color:'#37474f' }}>{d.facultad}</div>
                  <div className="legend-value">{d.cantidad}</div>
                  <div className="legend-pct">{d.pct}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal ranking */}
      <div className="card mb-6">
        <h3 className="chart-title mb-1">Ranking de Facultades por Grupos ({activeYear})</h3>
        <p className="chart-subtitle">Facultades con mayor número de grupos de investigación</p>
        <div style={{ height: 260 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={byFacultad.slice(0,10)} layout="vertical" margin={{ top:5, right:50, left:10, bottom:5 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e8f5e9" />
              <XAxis type="number" tick={{ fill:'#78909c', fontSize:11 }} axisLine={false} tickLine={false} />
              <YAxis dataKey="facultad" type="category" width={130} tick={{ fill:'#37474f', fontSize:11 }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="cantidad" name="Grupos" radius={[0,6,6,0]} label={{ position:'right', fill:'#2e7d32', fontSize:12, fontWeight:700 }}>
                {byFacultad.slice(0,10).map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Directorio */}
      <div className="card">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="chart-title">Directorio de Grupos de Investigación</h3>
            <p className="chart-subtitle">{filtered.length} de {total} grupos reconocidos hasta {activeYear}</p>
          </div>
          <div className="search-input" style={{ width:260 }}>
            <Search size={15} style={{ color:'#78909c', flexShrink:0 }} />
            <input placeholder="Buscar grupo, facultad..." value={search} onChange={e => setSearch(e.target.value)} />
          </div>
        </div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre del Grupo</th>
                <th>Facultad</th>
                <th>Escuela Profesional</th>
                <th>Año</th>
                <th>R.R.</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((g, i) => (
                <tr key={i}>
                  <td style={{ color:'#78909c', fontWeight:600 }}>{i+1}</td>
                  <td style={{ fontWeight:600, color:'#1b2e1b' }}>{g.nombre}</td>
                  <td><Badge variant="green">{g.facultad}</Badge></td>
                  <td style={{ fontSize:'0.8rem', color:'#546e7a' }}>{g.ep}</td>
                  <td><span className="badge badge-teal">{g.anioReconocimiento}</span></td>
                  <td style={{ fontSize:'0.75rem', fontFamily:'monospace', color:'#78909c' }}>{g.rr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

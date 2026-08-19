import { useState, useMemo } from 'react';
import { Building2, Search, Calendar, Layers } from 'lucide-react';
import WebPreviewCard from '../ui/WebPreviewCard';
import YearFilter from '../ui/YearFilter';
import Badge from '../ui/Badge';
import { institutos } from '../../data/data';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
  PieChart, Pie, Legend
} from 'recharts';

const COLORS = [
  '#2e7d32','#43a047','#558b2f','#66bb6a','#8bc34a',
  '#388e3c','#0288d1','#f57c00','#6d4c41','#ab47bc',
  '#1976d2','#e53935','#00695c','#546e7a','#bf360c','#4527a0',
];

const ANIO_COLORS = { 2020:'#a5d6a7', 2021:'#66bb6a', 2022:'#43a047', 2023:'#2e7d32', 2024:'#1b5e20' };

const shortFac = (f = '') =>
  f.replace(/Ingeniería /gi,'Ing. ')
   .replace(/Ciencias de la /gi,'C. ')
   .replace(/Ciencias /gi,'C. ')
   .replace(/Electrónica Y Sistemas/gi,'Electr./Sist.')
   .replace(/Eléctrica, /gi,'Eléctr., ')
   .slice(0, 32);

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ background:'#fff', border:'1px solid #c8e6c9', borderRadius:10, padding:'10px 14px', boxShadow:'0 4px 16px rgba(46,125,50,0.12)', fontSize:13 }}>
      <div style={{ fontWeight:700, color:'#1b5e20', marginBottom:4 }}>{payload[0]?.payload?.fullName || payload[0]?.payload?.facultad}</div>
      <div style={{ color:'#37474f' }}>Institutos: <strong style={{ color:'#2e7d32' }}>{payload[0]?.value}</strong></div>
    </div>
  );
};

export default function Institutos() {
  const [activeYear, setActiveYear] = useState(2026);
  const [search, setSearch] = useState('');

  const activeInstitutos = institutos.filter(i => i.anioCreacion <= activeYear);
  const total = activeInstitutos.length;

  const byFacultad = useMemo(() => {
    const map = {};
    activeInstitutos.forEach(inst => {
      const k = inst.facultad || 'Sin Facultad';
      map[k] = (map[k] || 0) + 1;
    });
    return Object.entries(map)
      .map(([f, c]) => ({ facultad: shortFac(f), fullName: f, count: c, pct: ((c/total)*100).toFixed(1) }))
      .sort((a, b) => b.count - a.count);
  }, [activeInstitutos, total]);

  // By creation year — for donut
  const byAnio = useMemo(() => {
    const map = {};
    activeInstitutos.forEach(i => { map[i.anioCreacion] = (map[i.anioCreacion] || 0) + 1; });
    return Object.entries(map).map(([a, c]) => ({ anio: Number(a), count: c, pct: ((c/total)*100).toFixed(1) })).sort((a,b)=>a.anio-b.anio);
  }, [activeInstitutos, total]);

  const filtered = useMemo(() =>
    activeInstitutos.filter(i =>
      i.nombre?.toLowerCase().includes(search.toLowerCase()) ||
      i.facultad?.toLowerCase().includes(search.toLowerCase())
    ), [activeInstitutos, search]);

  const newThisYear = activeInstitutos.filter(i => i.anioCreacion === activeYear).length;

  return (
    <div className="animate-fade-in-up stagger-children">
      {/* Header */}
      <div className="section-header">
        <div className="section-icon">
          <Building2 size={22} style={{ color: 'var(--color-primary)' }} />
        </div>
        <div className="flex-1">
          <h2 className="section-title">Institutos de Investigación</h2>
          <p className="section-subtitle">Centros especializados de investigación por facultad — UNA Puno</p>
        </div>
        <YearFilter years={[2023, 2024, 2025, 2026]} activeYear={activeYear} onChange={setActiveYear} />
      </div>

      {/* KPI Row */}
      <div className="grid grid-4 gap-4 mb-6">
        <div className="kpi-card" style={{ '--kpi-color': '#2e7d32' }}>
          <div style={{ fontSize:'0.75rem', fontWeight:700, color:'#78909c', textTransform:'uppercase', letterSpacing:'0.07em', marginBottom:8 }}>Total Institutos</div>
          <div className="stat-number" style={{ fontSize:'2.8rem', color:'#2e7d32' }}>{total}</div>
          <div style={{ fontSize:'0.78rem', color:'#78909c', marginTop:4 }}>Activos hasta {activeYear}</div>
        </div>
        <div className="kpi-card" style={{ '--kpi-color': '#43a047' }}>
          <div style={{ fontSize:'0.75rem', fontWeight:700, color:'#78909c', textTransform:'uppercase', letterSpacing:'0.07em', marginBottom:8 }}>Nuevos {activeYear}</div>
          <div className="stat-number" style={{ fontSize:'2.8rem', color:'#43a047' }}>{newThisYear}</div>
          <div style={{ fontSize:'0.78rem', color:'#78909c', marginTop:4 }}>Creados en el año</div>
        </div>
        <div className="kpi-card" style={{ '--kpi-color': '#558b2f' }}>
          <div style={{ fontSize:'0.75rem', fontWeight:700, color:'#78909c', textTransform:'uppercase', letterSpacing:'0.07em', marginBottom:8 }}>Facultades</div>
          <div className="stat-number" style={{ fontSize:'2.8rem', color:'#558b2f' }}>{byFacultad.length}</div>
          <div style={{ fontSize:'0.78rem', color:'#78909c', marginTop:4 }}>Con institutos activos</div>
        </div>
        <div className="kpi-card" style={{ '--kpi-color': '#0288d1' }}>
          <div style={{ fontSize:'0.75rem', fontWeight:700, color:'#78909c', textTransform:'uppercase', letterSpacing:'0.07em', marginBottom:8 }}>Principal facultad</div>
          <div style={{ fontSize:'1.0rem', fontWeight:800, color:'#0288d1', lineHeight:1.3, marginTop:4 }}>
            {byFacultad[0]?.fullName?.slice(0, 35) || '-'}
          </div>
          <div style={{ fontSize:'0.78rem', color:'#78909c', marginTop:4 }}>{byFacultad[0]?.count} institutos ({byFacultad[0]?.pct}%)</div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-2 gap-6 mb-6">
        {/* Bar chart by facultad */}
        <div className="card">
          <h3 className="chart-title mb-1">Institutos por Facultad</h3>
          <p className="chart-subtitle">Distribución de institutos según unidad académica ({activeYear})</p>
          <div style={{ height: 280 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={byFacultad} layout="vertical" margin={{ top:5, right:50, left:10, bottom:5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e8f5e9" />
                <XAxis type="number" tick={{ fill:'#78909c', fontSize:11 }} axisLine={false} tickLine={false} />
                <YAxis dataKey="facultad" type="category" width={130} tick={{ fill:'#37474f', fontSize:10 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="count" name="Institutos" radius={[0,6,6,0]} label={{ position:'right', fill:'#2e7d32', fontSize:12, fontWeight:700 }}>
                  {byFacultad.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Donut by año */}
        <div className="card">
          <h3 className="chart-title mb-1">Distribución por Año de Creación</h3>
          <p className="chart-subtitle">Institutos creados por período — {total} en total</p>
          <div style={{ display:'flex', gap:12, height:280 }}>
            <div style={{ flex:'0 0 180px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={byAnio} dataKey="count" cx="50%" cy="50%" innerRadius={55} outerRadius={82} paddingAngle={3}
                    label={({ anio, pct }) => `${anio}: ${pct}%`} labelLine={false}>
                    {byAnio.map((d, i) => <Cell key={i} fill={ANIO_COLORS[d.anio] || COLORS[i]} />)}
                  </Pie>
                  <Tooltip formatter={(v, _, p) => [`${v} (${p.payload.pct}%)`, 'Institutos']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div style={{ flex:1, display:'flex', flexDirection:'column', gap:6, justifyContent:'center' }}>
              {byAnio.map((d, i) => (
                <div key={i} style={{ display:'flex', alignItems:'center', gap:10 }}>
                  <div style={{ width:10, height:10, borderRadius:2, background: ANIO_COLORS[d.anio] || COLORS[i], flexShrink:0 }} />
                  <div style={{ flex:1, fontSize:'0.83rem', color:'#37474f' }}>Año {d.anio}</div>
                  <div style={{ fontWeight:700, color:'#1b2e1b', fontSize:'0.88rem' }}>{d.count}</div>
                  <div style={{ fontSize:'0.75rem', color:'#78909c', minWidth:38, textAlign:'right' }}>{d.pct}%</div>
                </div>
              ))}
              <div style={{ marginTop:8, paddingTop:8, borderTop:'1px solid #e8f5e9' }}>
                <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                  <div style={{ width:10, height:10, borderRadius:2, background:'#1b5e20', flexShrink:0 }} />
                  <div style={{ flex:1, fontSize:'0.83rem', fontWeight:700, color:'#1b5e20' }}>Total</div>
                  <div style={{ fontWeight:900, color:'#2e7d32', fontSize:'1rem' }}>{total}</div>
                  <div style={{ fontSize:'0.75rem', color:'#78909c', minWidth:38, textAlign:'right' }}>100%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Progress */}
      <div className="card mb-6">
        <h3 className="chart-title mb-1">Progreso de Creación de Institutos 2020–{activeYear}</h3>
        <p className="chart-subtitle">Institutos acumulados por año de fundación</p>
        <div style={{ display:'flex', gap:16, marginTop:16, flexWrap:'wrap' }}>
          {byAnio.map((d, i) => {
            const acc = byAnio.slice(0, i+1).reduce((s,x)=>s+x.count,0);
            return (
              <div key={d.anio} style={{ flex:'1 1 100px', textAlign:'center', minWidth:80 }}>
                <div style={{ fontSize:'1.6rem', fontWeight:900, color: ANIO_COLORS[d.anio] || COLORS[i] }}>{acc}</div>
                <div style={{ fontSize:'0.72rem', color:'#78909c', fontWeight:600 }}>{d.anio}</div>
                <div style={{ marginTop:6, height:6, borderRadius:99, background:'#e8f5e9', overflow:'hidden' }}>
                  <div style={{ height:'100%', width:`${(acc/total)*100}%`, background: ANIO_COLORS[d.anio] || COLORS[i], borderRadius:99, transition:'width 1s ease' }} />
                </div>
                <div style={{ fontSize:'0.7rem', color:'#78909c', marginTop:3 }}>+{d.count} nuevos</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Portal VRI */}
      <WebPreviewCard
        url="https://web.vriunap.pe/instituto/investigamos/institutos"
        label="Ver en Portal VRI"
        color="#2e7d32"
      />

      {/* Directorio filtrable */}
      <div className="card">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="chart-title">Directorio de Institutos de Investigación</h3>
            <p className="chart-subtitle">{filtered.length} de {total} institutos</p>
          </div>
          <div className="search-input" style={{ width:260 }}>
            <Search size={15} style={{ color:'#78909c', flexShrink:0 }} />
            <input placeholder="Buscar instituto, facultad..." value={search} onChange={e => setSearch(e.target.value)} />
          </div>
        </div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre del Instituto</th>
                <th>Facultad</th>
                <th>Año</th>
                <th>R.R.</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((inst, i) => (
                <tr key={inst.id}>
                  <td style={{ color:'#78909c', fontWeight:600 }}>#{i+1}</td>
                  <td style={{ fontWeight:600, color:'#1b2e1b' }}>{inst.nombre}</td>
                  <td><Badge variant="blue">{inst.facultad}</Badge></td>
                  <td>
                    <span className="badge" style={{ background: ANIO_COLORS[inst.anioCreacion] ? `${ANIO_COLORS[inst.anioCreacion]}22` : '#e8f5e9', color: ANIO_COLORS[inst.anioCreacion] || '#2e7d32', border:`1px solid ${ANIO_COLORS[inst.anioCreacion] || '#c8e6c9'}` }}>
                      <Calendar size={10} /> {inst.anioCreacion}
                    </span>
                  </td>
                  <td style={{ fontSize:'0.75rem', fontFamily:'monospace', color:'#78909c' }}>{inst.rr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

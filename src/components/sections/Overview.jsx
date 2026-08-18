import { LayoutDashboard, Building2, Sprout, Users, BadgeCheck, ArrowUpRight, TrendingUp } from 'lucide-react';
import KPICard from '../KPICard';
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell, PieChart, Pie, Legend
} from 'recharts';
import { kpiPorAnio, semillerosEvolucion, gruposEvolucion } from '../../data/data';

const latestKPIs = kpiPorAnio[kpiPorAnio.length - 1];
const prev = kpiPorAnio[kpiPorAnio.length - 2];

const trendSem = prev ? (((latestKPIs.semilleros - prev.semilleros) / Math.max(prev.semilleros,1)) * 100).toFixed(0) : null;
const trendGrp = prev ? (((latestKPIs.grupos - prev.grupos) / Math.max(prev.grupos,1)) * 100).toFixed(0) : null;
const trendRen = prev ? (((latestKPIs.renacyt - prev.renacyt) / Math.max(prev.renacyt,1)) * 100).toFixed(0) : null;

// Nuevos por año (semilleros + grupos)
const nuevosData = semillerosEvolucion.map(e => ({
  anio: e.anio,
  'Semilleros Nuevos': e.nuevos,
  'Grupos Nuevos': gruposEvolucion.find(g => g.anio === e.anio)?.nuevos || 0,
}));

// Distribución 2026 para donut resumen
const resumenPie = [
  { name: 'Semilleros', value: latestKPIs.semilleros, color: '#2e7d32' },
  { name: 'Grupos', value: latestKPIs.grupos, color: '#43a047' },
  { name: 'Institutos', value: latestKPIs.institutos, color: '#66bb6a' },
  { name: 'RENACYT', value: latestKPIs.renacyt, color: '#0288d1' },
];
const resumenTotal = resumenPie.reduce((s, d) => s + d.value, 0);

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ background:'#fff', border:'1px solid #c8e6c9', borderRadius:10, padding:'10px 14px', boxShadow:'0 4px 16px rgba(46,125,50,0.12)', fontSize:13 }}>
      <div style={{ fontWeight:700, color:'#1b5e20', marginBottom:4 }}>{label}</div>
      {payload.map((p, i) => (
        <div key={i} style={{ color:'#37474f', display:'flex', gap:8, alignItems:'center' }}>
          <span style={{ width:10, height:10, borderRadius:2, background:p.color, display:'inline-block' }} />
          {p.name}: <strong style={{ color: p.color }}>{p.value}</strong>
        </div>
      ))}
    </div>
  );
};

export default function Overview() {
  return (
    <div className="animate-fade-in-up stagger-children">
      {/* Header */}
      <div className="section-header">
        <div className="section-icon">
          <LayoutDashboard size={22} style={{ color: 'var(--color-primary)' }} />
        </div>
        <div>
          <h2 className="section-title">Resumen Estratégico 2021–2026</h2>
          <p className="section-subtitle">Métricas principales de investigación e innovación — Universidad Nacional del Altiplano Puno</p>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-4 gap-4 mb-6">
        <KPICard title="Institutos de Investigación" value={latestKPIs.institutos} icon={Building2} color="var(--color-primary)" />
        <KPICard title="Semilleros de Investigación" value={latestKPIs.semilleros} icon={Sprout} color="#43a047" trend={trendSem} trendLabel="vs 2025" />
        <KPICard title="Grupos de Investigación" value={latestKPIs.grupos} icon={Users} color="#558b2f" trend={trendGrp} trendLabel="vs 2025" />
        <KPICard title="Investigadores RENACYT" value={latestKPIs.renacyt} icon={BadgeCheck} color="#0288d1" trend={trendRen} trendLabel="vs 2025" />
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-2 gap-6 mb-6">
        {/* Line evolution */}
        <div className="card">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="chart-title">Evolución General 2021–2026</h3>
              <p className="chart-subtitle">Crecimiento de institutos, semilleros, grupos y RENACYT</p>
            </div>
            <div className="trend trend-up"><TrendingUp size={13}/> Tendencia creciente</div>
          </div>
          <div style={{ height: 260 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={kpiPorAnio} margin={{ top:10, right:10, left:-15, bottom:0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e8f5e9" />
                <XAxis dataKey="anio" tick={{ fill:'#78909c', fontSize:12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill:'#78909c', fontSize:12 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Line type="monotone" dataKey="semilleros" name="Semilleros" stroke="#2e7d32" strokeWidth={3} dot={{ r:4, fill:'#2e7d32', strokeWidth:0 }} activeDot={{ r:6 }} />
                <Line type="monotone" dataKey="grupos" name="Grupos" stroke="#558b2f" strokeWidth={2} dot={{ r:3, fill:'#558b2f', strokeWidth:0 }} strokeDasharray="5 2" />
                <Line type="monotone" dataKey="institutos" name="Institutos" stroke="#8bc34a" strokeWidth={2} dot={{ r:3, fill:'#8bc34a', strokeWidth:0 }} />
                <Line type="monotone" dataKey="renacyt" name="RENACYT" stroke="#0288d1" strokeWidth={2} dot={{ r:3, fill:'#0288d1', strokeWidth:0 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Donut resumen proporcional */}
        <div className="card">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="chart-title">Composición del Ecosistema (2026)</h3>
              <p className="chart-subtitle">Distribución de registros por tipo de entidad</p>
            </div>
            <span className="badge badge-green">{resumenTotal} registros</span>
          </div>
          <div style={{ display:'flex', gap:16, height:260, alignItems:'center' }}>
            <div style={{ flex:'0 0 180px', height:'100%' }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={resumenPie} dataKey="value" cx="50%" cy="50%" innerRadius={55} outerRadius={82} paddingAngle={3}>
                    {resumenPie.map((d, i) => <Cell key={i} fill={d.color} />)}
                  </Pie>
                  <Tooltip formatter={(v, name) => [`${v} (${((v/resumenTotal)*100).toFixed(1)}%)`, name]} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div style={{ flex:1 }}>
              {resumenPie.map((d) => (
                <div key={d.name} style={{ display:'flex', alignItems:'center', gap:10, padding:'7px 0', borderBottom:'1px solid #f0f7f0' }}>
                  <div style={{ width:10, height:10, borderRadius:2, background:d.color, flexShrink:0 }} />
                  <div style={{ flex:1, fontSize:'0.85rem', fontWeight:500, color:'#37474f' }}>{d.name}</div>
                  <div style={{ fontWeight:800, color:'#1b2e1b', fontSize:'1rem' }}>{d.value}</div>
                  <div style={{ fontSize:'0.75rem', color:'#78909c', minWidth:42, textAlign:'right' }}>
                    {((d.value/resumenTotal)*100).toFixed(1)}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-2 gap-6">
        {/* Nuevos por año */}
        <div className="card">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="chart-title">Nuevos Reconocimientos por Año</h3>
              <p className="chart-subtitle">Semilleros y grupos nuevos por período</p>
            </div>
            <span className="badge badge-green">2023–2026</span>
          </div>
          <div style={{ height: 240 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={nuevosData} margin={{ top:10, right:10, left:-15, bottom:0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e8f5e9" />
                <XAxis dataKey="anio" tick={{ fill:'#78909c', fontSize:12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill:'#78909c', fontSize:12 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="Semilleros Nuevos" fill="#2e7d32" radius={[4,4,0,0]} barSize={28} />
                <Bar dataKey="Grupos Nuevos" fill="#8bc34a" radius={[4,4,0,0]} barSize={28} />
                <Legend wrapperStyle={{ fontSize:12, color:'#37474f', paddingTop:8 }} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* RENACYT evolution bar */}
        <div className="card">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="chart-title">Investigadores RENACYT 2021–2026</h3>
              <p className="chart-subtitle">Evolución de investigadores calificados por CONCYTEC</p>
            </div>
            <div className="trend trend-up"><ArrowUpRight size={13}/> +{trendRen}% vs 2025</div>
          </div>
          <div style={{ height: 240 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={kpiPorAnio} margin={{ top:10, right:10, left:-15, bottom:0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e8f5e9" />
                <XAxis dataKey="anio" tick={{ fill:'#78909c', fontSize:12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill:'#78909c', fontSize:12 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="renacyt" name="Investigadores RENACYT" radius={[6,6,0,0]} maxBarSize={52}
                  label={{ position:'top', fill:'#0288d1', fontSize:12, fontWeight:700 }}>
                  {kpiPorAnio.map((e, i) => (
                    <Cell key={i} fill={e.anio === 2026 ? '#0288d1' : '#b3e5fc'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

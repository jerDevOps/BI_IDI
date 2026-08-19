import { useState, useMemo } from 'react';
import { DollarSign, Search, TrendingUp, Layers, BookOpen, Users } from 'lucide-react';
import { semillerosFinanciamiento, gruposFinanciamiento } from '../../data/data';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  ComposedChart, Line, Cell, PieChart, Pie,
} from 'recharts';

const COLORS_S = ['#1565c0','#1976d2','#1e88e5','#2196f3','#42a5f5','#64b5f6','#90caf9','#0d47a1','#0288d1','#0277bd'];
const COLORS_G = ['#4a148c','#6a1b9a','#7b1fa2','#8e24aa','#9c27b0','#ab47bc','#ba68c8','#311b92','#4527a0','#512da8'];

const fmt = (n) => `S/ ${n.toLocaleString('es-PE')}`;

const CustomTooltipS = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ background:'#fff', border:'1px solid #bbdefb', borderRadius:10, padding:'10px 14px', boxShadow:'0 4px 16px rgba(21,101,192,0.13)', fontSize:13 }}>
      <div style={{ fontWeight:700, color:'#0d47a1', marginBottom:4 }}>{payload[0]?.payload?.ep}</div>
      <div style={{ color:'#37474f' }}>Proyectos: <strong style={{ color:'#1565c0' }}>{payload[0]?.payload?.cantidad}</strong></div>
      <div style={{ color:'#37474f' }}>Monto: <strong style={{ color:'#1976d2' }}>{fmt(payload[0]?.payload?.montoTotal)}</strong></div>
    </div>
  );
};

const CustomTooltipG = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ background:'#fff', border:'1px solid #e1bee7', borderRadius:10, padding:'10px 14px', boxShadow:'0 4px 16px rgba(74,20,140,0.13)', fontSize:13 }}>
      <div style={{ fontWeight:700, color:'#4a148c', marginBottom:4 }}>{payload[0]?.payload?.ep}</div>
      <div style={{ color:'#37474f' }}>Proyectos: <strong style={{ color:'#7b1fa2' }}>{payload[0]?.payload?.cantidad}</strong></div>
      <div style={{ color:'#37474f' }}>Monto: <strong style={{ color:'#9c27b0' }}>{fmt(payload[0]?.payload?.montoTotal)}</strong></div>
    </div>
  );
};

export default function Financiamiento() {
  const [activeTab, setActiveTab] = useState('semilleros'); // 'semilleros' | 'grupos'
  const [activeYear, setActiveYear] = useState('todos');
  const [search, setSearch] = useState('');

  const years = [2024, 2025, 2026];

  // --- SEMILLEROS ---
  const filteredSem = useMemo(() => {
    let data = activeYear === 'todos'
      ? semillerosFinanciamiento
      : semillerosFinanciamiento.filter(d => d.anio === activeYear);
    if (search) {
      data = data.filter(d =>
        d.titulo?.toLowerCase().includes(search.toLowerCase()) ||
        d.ep?.toLowerCase().includes(search.toLowerCase())
      );
    }
    return data;
  }, [activeYear, search]);

  const semByEP = useMemo(() => {
    const map = {};
    filteredSem.forEach(d => {
      if (!map[d.ep]) map[d.ep] = { cantidad: 0, montoTotal: 0 };
      map[d.ep].cantidad++;
      map[d.ep].montoTotal += d.monto;
    });
    return Object.entries(map)
      .map(([ep, v]) => ({ ep, ...v }))
      .sort((a, b) => b.cantidad - a.cantidad);
  }, [filteredSem]);

  const semByAnio = useMemo(() => years.map(y => ({
    anio: y,
    cantidad: semillerosFinanciamiento.filter(d => d.anio === y).length,
    monto: semillerosFinanciamiento.filter(d => d.anio === y).reduce((s, d) => s + d.monto, 0),
  })), []);

  // --- GRUPOS ---
  const filteredGrp = useMemo(() => {
    let data = activeYear === 'todos'
      ? gruposFinanciamiento
      : gruposFinanciamiento.filter(d => d.anio === activeYear);
    if (search) {
      data = data.filter(d =>
        d.titulo?.toLowerCase().includes(search.toLowerCase()) ||
        d.ep?.toLowerCase().includes(search.toLowerCase())
      );
    }
    return data;
  }, [activeYear, search]);

  const grpByEP = useMemo(() => {
    const map = {};
    filteredGrp.forEach(d => {
      if (!map[d.ep]) map[d.ep] = { cantidad: 0, montoTotal: 0 };
      map[d.ep].cantidad++;
      map[d.ep].montoTotal += d.monto;
    });
    return Object.entries(map)
      .map(([ep, v]) => ({ ep, ...v }))
      .sort((a, b) => b.cantidad - a.cantidad);
  }, [filteredGrp]);

  const grpByAnio = useMemo(() => years.map(y => ({
    anio: y,
    cantidad: gruposFinanciamiento.filter(d => d.anio === y).length,
    monto: gruposFinanciamiento.filter(d => d.anio === y).reduce((s, d) => s + d.monto, 0),
  })), []);

  const isSem = activeTab === 'semilleros';
  const currentData = isSem ? filteredSem : filteredGrp;
  const byEP = isSem ? semByEP : grpByEP;
  const byAnio = isSem ? semByAnio : grpByAnio;
  const COLORS = isSem ? COLORS_S : COLORS_G;
  const accentColor = isSem ? '#1565c0' : '#7b1fa2';
  const lightColor = isSem ? '#bbdefb' : '#e1bee7';
  const totalProy = currentData.length;
  const totalMonto = currentData.reduce((s, d) => s + d.monto, 0);
  const topEP = byEP[0];

  // Pie top 8
  const pieData = useMemo(() => {
    const top = byEP.slice(0, 8);
    const rest = byEP.slice(8).reduce((s, x) => s + x.cantidad, 0);
    return rest > 0 ? [...top, { ep: 'Otras EP', cantidad: rest, montoTotal: rest * (isSem ? 10000 : 20000) }] : top;
  }, [byEP, isSem]);

  return (
    <div className="animate-fade-in-up stagger-children">
      {/* Header */}
      <div className="section-header">
        <div className="section-icon">
          <DollarSign size={22} style={{ color: accentColor }} />
        </div>
        <div className="flex-1">
          <h2 className="section-title">Financiamiento de Proyectos de Investigación</h2>
          <p className="section-subtitle">Proyectos financiados de Semilleros y Grupos de Investigación 2024–2026</p>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display:'flex', gap:8, marginBottom:24 }}>
        <button
          id="tab-semilleros"
          onClick={() => { setActiveTab('semilleros'); setSearch(''); }}
          style={{
            display:'flex', alignItems:'center', gap:8,
            padding:'10px 22px', borderRadius:12, border:'none', cursor:'pointer', fontWeight:700, fontSize:'0.9rem', transition:'all 0.2s',
            background: isSem ? '#1565c0' : '#f0f4ff',
            color: isSem ? '#fff' : '#546e7a',
            boxShadow: isSem ? '0 4px 16px rgba(21,101,192,0.25)' : 'none',
          }}
        >
          <BookOpen size={16}/> Semilleros
        </button>
        <button
          id="tab-grupos"
          onClick={() => { setActiveTab('grupos'); setSearch(''); }}
          style={{
            display:'flex', alignItems:'center', gap:8,
            padding:'10px 22px', borderRadius:12, border:'none', cursor:'pointer', fontWeight:700, fontSize:'0.9rem', transition:'all 0.2s',
            background: !isSem ? '#7b1fa2' : '#f8f0ff',
            color: !isSem ? '#fff' : '#546e7a',
            boxShadow: !isSem ? '0 4px 16px rgba(123,31,162,0.25)' : 'none',
          }}
        >
          <Users size={16}/> Grupos de Investigación
        </button>

        {/* Year filter */}
        <div style={{ marginLeft:'auto', display:'flex', gap:6 }}>
          {['todos', ...years].map(y => (
            <button
              key={y}
              onClick={() => setActiveYear(y)}
              style={{
                padding:'8px 16px', borderRadius:10, border:'none', cursor:'pointer',
                fontWeight:600, fontSize:'0.82rem', transition:'all 0.2s',
                background: activeYear === y ? accentColor : '#f5f5f5',
                color: activeYear === y ? '#fff' : '#78909c',
              }}
            >
              {y === 'todos' ? 'Todos' : y}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-4 gap-4 mb-6">
        <div className="kpi-card" style={{ '--kpi-color': accentColor }}>
          <div style={{ fontSize:'0.75rem', fontWeight:700, color:'#78909c', textTransform:'uppercase', letterSpacing:'0.07em', marginBottom:8 }}>
            Total Proyectos
          </div>
          <div className="stat-number" style={{ fontSize:'2.8rem', color: accentColor }}>{totalProy}</div>
          <div style={{ fontSize:'0.78rem', color:'#78909c', marginTop:4 }}>
            {activeYear === 'todos' ? '2024–2026' : `Año ${activeYear}`}
          </div>
        </div>
        <div className="kpi-card" style={{ '--kpi-color': accentColor }}>
          <div style={{ fontSize:'0.75rem', fontWeight:700, color:'#78909c', textTransform:'uppercase', letterSpacing:'0.07em', marginBottom:8 }}>
            Inversión Total
          </div>
          <div style={{ fontSize:'1.6rem', fontWeight:800, color: accentColor, lineHeight:1.2, marginTop:4 }}>
            {fmt(totalMonto)}
          </div>
          <div style={{ fontSize:'0.78rem', color:'#78909c', marginTop:4 }}>
            {isSem ? 'S/ 10,000 por proyecto' : 'S/ 20,000 por proyecto'}
          </div>
        </div>
        <div className="kpi-card" style={{ '--kpi-color': accentColor }}>
          <div style={{ fontSize:'0.75rem', fontWeight:700, color:'#78909c', textTransform:'uppercase', letterSpacing:'0.07em', marginBottom:8 }}>
            Escuelas Profesionales
          </div>
          <div className="stat-number" style={{ fontSize:'2.8rem', color: accentColor }}>{byEP.length}</div>
          <div style={{ fontSize:'0.78rem', color:'#78909c', marginTop:4 }}>Con proyectos financiados</div>
        </div>
        <div className="kpi-card" style={{ '--kpi-color': accentColor }}>
          <div style={{ fontSize:'0.75rem', fontWeight:700, color:'#78909c', textTransform:'uppercase', letterSpacing:'0.07em', marginBottom:8 }}>
            Mayor Participación
          </div>
          <div style={{ fontSize:'0.92rem', fontWeight:800, color: accentColor, lineHeight:1.3, marginTop:4 }}>
            {topEP?.ep?.slice(0, 30) || '-'}
          </div>
          <div style={{ fontSize:'0.78rem', color:'#78909c', marginTop:4 }}>
            {topEP?.cantidad} proyectos · {fmt(topEP?.montoTotal || 0)}
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-2 gap-6 mb-6">
        {/* Bar por año */}
        <div className="card">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="chart-title">Proyectos por Año</h3>
              <p className="chart-subtitle">Número de proyectos financiados 2024–2026</p>
            </div>
            <div className="badge" style={{ background: lightColor, color: accentColor, fontWeight:700 }}>
              <TrendingUp size={12}/> Evolución
            </div>
          </div>
          <div style={{ height: 230 }}>
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={byAnio} margin={{ top:10, right:20, bottom:0, left:-10 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={lightColor} />
                <XAxis dataKey="anio" tick={{ fill:'#78909c', fontSize:12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill:'#78909c', fontSize:12 }} axisLine={false} tickLine={false} />
                <Tooltip formatter={(v, name) => name === 'Monto' ? [fmt(v), name] : [v, name]} />
                <Bar dataKey="cantidad" name="Proyectos" barSize={48} radius={[8,8,0,0]}>
                  {byAnio.map((e, i) => (
                    <Cell key={i} fill={activeYear === e.anio ? accentColor : lightColor} />
                  ))}
                </Bar>
                <Line type="monotone" dataKey="cantidad" stroke={accentColor} strokeWidth={2.5} dot={{ r:4, fill: accentColor }} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie por EP */}
        <div className="card">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="chart-title">Distribución por Escuela Profesional</h3>
              <p className="chart-subtitle">Participación de cada EP en el total</p>
            </div>
            <span className="badge" style={{ background: lightColor, color: accentColor, fontWeight:700 }}>
              {totalProy} proyectos
            </span>
          </div>
          <div style={{ display:'flex', gap:12, height:220 }}>
            <div style={{ flex:'0 0 150px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} dataKey="cantidad" cx="50%" cy="50%" innerRadius={42} outerRadius={68} paddingAngle={2}>
                    {pieData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                  </Pie>
                  <Tooltip formatter={(v, _, p) => [`${v} proyectos`, p.payload.ep]} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div style={{ flex:1, overflowY:'auto', display:'flex', flexDirection:'column', gap:4 }}>
              {pieData.map((d, i) => (
                <div key={i} className="legend-row">
                  <div className="legend-dot" style={{ background: COLORS[i % COLORS.length] }} />
                  <div className="legend-label text-xs" style={{ color:'#37474f', flex:1 }}>{d.ep.slice(0,28)}</div>
                  <div className="legend-value">{d.cantidad}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Ranking horizontal */}
      <div className="card mb-6">
        <h3 className="chart-title mb-1">Ranking de EP por Proyectos Financiados</h3>
        <p className="chart-subtitle">Escuelas profesionales con mayor número de proyectos</p>
        <div style={{ height: Math.max(200, byEP.slice(0,10).length * 32 + 40) }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={byEP.slice(0,10)}
              layout="vertical"
              margin={{ top:5, right:80, left:10, bottom:5 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke={lightColor} />
              <XAxis type="number" tick={{ fill:'#78909c', fontSize:11 }} axisLine={false} tickLine={false} />
              <YAxis
                dataKey="ep"
                type="category"
                width={170}
                tick={{ fill:'#37474f', fontSize:10 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={v => v.length > 22 ? v.slice(0,22)+'…' : v}
              />
              <Tooltip content={isSem ? <CustomTooltipS /> : <CustomTooltipG />} />
              <Bar
                dataKey="cantidad"
                name="Proyectos"
                radius={[0,6,6,0]}
                label={{ position:'right', fill: accentColor, fontSize:12, fontWeight:700 }}
              >
                {byEP.slice(0,10).map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Directorio / Tabla */}
      <div className="card">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="chart-title">
              Directorio de Proyectos — {isSem ? 'Semilleros' : 'Grupos de Investigación'}
            </h3>
            <p className="chart-subtitle">
              {currentData.length} proyectos · Inversión total: {fmt(totalMonto)}
            </p>
          </div>
          <div className="search-input" style={{ width:280 }}>
            <Search size={15} style={{ color:'#78909c', flexShrink:0 }} />
            <input
              placeholder="Buscar proyecto o EP..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Título del Proyecto</th>
                <th>Escuela Profesional</th>
                <th>Monto</th>
                <th>Año</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((d, i) => (
                <tr key={i}>
                  <td style={{ color:'#78909c', fontWeight:600 }}>{i+1}</td>
                  <td style={{ fontWeight:500, color:'#1b2e3a', fontSize:'0.82rem', maxWidth:380 }}>
                    {d.titulo}
                  </td>
                  <td>
                    <span
                      className="badge"
                      style={{ background: lightColor, color: accentColor, fontWeight:600, fontSize:'0.75rem', whiteSpace:'nowrap' }}
                    >
                      {d.ep}
                    </span>
                  </td>
                  <td style={{ fontWeight:700, color: accentColor, whiteSpace:'nowrap' }}>
                    {fmt(d.monto)}
                  </td>
                  <td>
                    <span className="badge badge-teal">{d.anio}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

import { motion } from 'framer-motion';
import { 
  Building2, Sprout, Users, BadgeCheck, FileBarChart, ArrowUpRight 
} from 'lucide-react';
import KPICard from '../KPICard';
import { 
  LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';
import { kpiPorAnio, feduTotales, concursos } from '../../data/data';

export default function Overview() {
  const latestKPIs = kpiPorAnio[kpiPorAnio.length - 1]; // 2025

  return (
    <div className="animate-fade-in-up stagger-children">
      <div className="section-header">
        <div className="section-icon">
          <LayoutDashboard className="text-primary" size={24} />
        </div>
        <div>
          <h2 className="section-title">Resumen Estratégico 2021-2026</h2>
          <p className="section-subtitle">Métricas principales de investigación e innovación de la UNA-Puno</p>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-auto gap-6 mb-8">
        <KPICard 
          title="Institutos de Investigación" 
          value={latestKPIs.institutos} 
          icon={Building2} 
          color="var(--color-primary)" 
        />
        <KPICard 
          title="Semilleros de Investigación" 
          value={latestKPIs.semilleros} 
          icon={Sprout} 
          color="var(--color-success)" 
        />
        <KPICard 
          title="Grupos de Investigación" 
          value={latestKPIs.grupos} 
          icon={Users} 
          color="var(--color-accent)" 
        />
        <KPICard 
          title="Proyectos FEDU Activos" 
          value={latestKPIs.fedu} 
          icon={FileBarChart} 
          color="var(--color-info)" 
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-2 gap-6 mb-8">
        {/* Evolution Chart */}
        <div className="card">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="chart-title">Evolución de Investigación (2021-2025)</h3>
              <p className="chart-subtitle">Crecimiento de institutos, semilleros y grupos</p>
            </div>
            <div className="trend trend-up"><ArrowUpRight size={14} /> +144% vs 2023</div>
          </div>
          
          <div className="chart-container" style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={kpiPorAnio} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="anio" stroke="var(--color-text-muted)" tick={{ fill: 'var(--color-text-muted)' }} axisLine={false} tickLine={false} />
                <YAxis stroke="var(--color-text-muted)" tick={{ fill: 'var(--color-text-muted)' }} axisLine={false} tickLine={false} />
                <Tooltip />
                <Line type="monotone" dataKey="semilleros" name="Semilleros" stroke="var(--color-success)" strokeWidth={3} dot={{ r: 4, fill: 'var(--color-bg-card)', strokeWidth: 2 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="institutos" name="Institutos" stroke="var(--color-primary)" strokeWidth={3} dot={{ r: 4, fill: 'var(--color-bg-card)', strokeWidth: 2 }} />
                <Line type="monotone" dataKey="grupos" name="Grupos" stroke="var(--color-accent)" strokeWidth={3} dot={{ r: 4, fill: 'var(--color-bg-card)', strokeWidth: 2 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* FEDU Area Chart */}
        <div className="card">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="chart-title">Inversión FEDU (Proyectos)</h3>
              <p className="chart-subtitle">Proyectos financiados por el Fondo Especial</p>
            </div>
            <div className="badge badge-blue">2023-2025</div>
          </div>
          
          <div className="chart-container" style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={feduTotales} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorFedu" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-info)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--color-info)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="anio" stroke="var(--color-text-muted)" tick={{ fill: 'var(--color-text-muted)' }} axisLine={false} tickLine={false} />
                <YAxis stroke="var(--color-text-muted)" tick={{ fill: 'var(--color-text-muted)' }} axisLine={false} tickLine={false} />
                <Tooltip />
                <Area type="monotone" dataKey="total" name="Proyectos FEDU" stroke="var(--color-info)" strokeWidth={3} fillOpacity={1} fill="url(#colorFedu)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Concursos Row */}
      <div className="card">
        <h3 className="chart-title">Concursos y Congresos Clave</h3>
        <p className="chart-subtitle">Eventos principales organizados por el Vicerrectorado de Investigación</p>
        
        <div className="table-wrapper mt-4">
          <table>
            <thead>
              <tr>
                <th>Año</th>
                <th>Nombre del Evento</th>
                <th>Tipo</th>
                <th>Participantes</th>
                <th>Ganadores</th>
              </tr>
            </thead>
            <tbody>
              {concursos.map((c, i) => (
                <tr key={i}>
                  <td>{c.anio}</td>
                  <td>{c.nombre}</td>
                  <td>
                    <span className={`badge ${c.tipo === 'Concurso' ? 'badge-gold' : 'badge-blue'}`}>
                      {c.tipo}
                    </span>
                  </td>
                  <td>{c.participantes > 0 ? c.participantes : '-'}</td>
                  <td>{c.ganadores > 0 ? c.ganadores : '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Dummy import to make Lucide icon work since it's not in the file imports initially.
import { LayoutDashboard } from 'lucide-react';

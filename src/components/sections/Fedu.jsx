import { useState } from 'react';
import { FileBarChart, PieChart as PieChartIcon } from 'lucide-react';
import YearFilter from '../ui/YearFilter';
import { 
  feduPorEscuela, feduTotales
} from '../../data/data';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, Cell
} from 'recharts';

export default function Fedu() {
  const [activeYear, setActiveYear] = useState(2025);
  
  const totalActivo = feduTotales.find(f => f.anio === activeYear)?.total || 0;
  
  // Get top 15 schools for the active year to display in the chart
  const dataKey = `fedu${activeYear}`;
  const chartData = [...feduPorEscuela]
    .sort((a, b) => b[dataKey] - a[dataKey])
    .slice(0, 12);

  return (
    <div className="animate-fade-in-up stagger-children">
      <div className="section-header">
        <div className="section-icon bg-orange-900/40">
          <FileBarChart className="text-warning" size={24} style={{ color: 'var(--color-warning)' }} />
        </div>
        <div className="flex-1">
          <h2 className="section-title">Fondo Especial de Desarrollo Universitario (FEDU)</h2>
          <p className="section-subtitle">Proyectos de investigación financiados por el fondo especial</p>
        </div>
        <YearFilter years={[2023, 2024, 2025]} activeYear={activeYear} onChange={setActiveYear} />
      </div>

      <div className="grid grid-3 gap-6 mb-8">
        <div className="card col-span-1">
          <h3 className="chart-title">Proyectos Activos</h3>
          <p className="chart-subtitle">En ejecución durante {activeYear}</p>
          <div className="stat-pill mt-4 mb-6">
            <span className="stat-number text-5xl" style={{ color: 'var(--color-warning)' }}>{totalActivo}</span>
            <span className="stat-unit">proyectos</span>
          </div>
          
          <div className="divider" />
          
          <h4 className="text-sm font-semibold mb-3">Evolución de Financiación</h4>
          <div className="chart-container" style={{ height: 120 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={feduTotales} margin={{ top: 5, right: 0, left: -25, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorWarning" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-warning)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="var(--color-warning)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="anio" stroke="var(--color-text-muted)" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis stroke="var(--color-text-muted)" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ backgroundColor: 'rgba(15, 20, 40, 0.95)', border: 'none' }} />
                <Area type="monotone" dataKey="total" stroke="var(--color-warning)" fillOpacity={1} fill="url(#colorWarning)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="card" style={{ gridColumn: 'span 2' }}>
          <div className="flex items-center gap-2 mb-2">
            <PieChartIcon size={18} className="text-warning" style={{ color: 'var(--color-warning)' }} />
            <h3 className="chart-title mb-0">Top 12 Escuelas Profesionales</h3>
          </div>
          <p className="chart-subtitle">Mayor número de proyectos FEDU en {activeYear}</p>
          
          <div className="chart-container mt-6" style={{ height: 280 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 5, right: 30, left: -20, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="ep" stroke="var(--color-text-muted)" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} angle={-45} textAnchor="end" height={60} />
                <YAxis stroke="var(--color-text-muted)" axisLine={false} tickLine={false} />
                <Tooltip cursor={{ fill: 'rgba(255,255,255,0.04)' }} />
                <Bar dataKey={dataKey} name="Proyectos" radius={[4, 4, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index < 3 ? 'var(--color-warning)' : 'var(--chart-6)'} fillOpacity={index < 3 ? 1 : 0.7} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="chart-title">Distribución Completa de Proyectos ({activeYear})</h3>
        <p className="chart-subtitle">Listado por Escuela Profesional</p>
        
        <div className="table-wrapper mt-4">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Escuela Profesional</th>
                <th className="text-center">2023</th>
                <th className="text-center">2024</th>
                <th className="text-center">2025</th>
                <th>Tendencia</th>
              </tr>
            </thead>
            <tbody>
              {[...feduPorEscuela].sort((a, b) => b[dataKey] - a[dataKey]).map((escuela, i) => {
                // Calculate trend
                let trend = 0; // flat
                if (activeYear === 2024) trend = escuela.fedu2024 - escuela.fedu2023;
                if (activeYear === 2025) trend = escuela.fedu2025 - escuela.fedu2024;
                
                return (
                  <tr key={i}>
                    <td className="text-muted">{i+1}</td>
                    <td className="font-medium">{escuela.ep}</td>
                    <td className={`text-center ${activeYear === 2023 ? 'font-bold' : 'text-muted'}`}>{escuela.fedu2023}</td>
                    <td className={`text-center ${activeYear === 2024 ? 'font-bold' : 'text-muted'}`}>{escuela.fedu2024}</td>
                    <td className={`text-center ${activeYear === 2025 ? 'font-bold' : 'text-muted'}`}>{escuela.fedu2025}</td>
                    <td>
                      {trend > 0 ? (
                        <span className="trend trend-up">+{trend}</span>
                      ) : trend < 0 ? (
                        <span className="trend trend-down">{trend}</span>
                      ) : (
                        <span className="text-muted text-xs px-2">=</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

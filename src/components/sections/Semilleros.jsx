import { useState } from 'react';
import { Sprout, Trophy } from 'lucide-react';
import YearFilter from '../ui/YearFilter';
import Badge from '../ui/Badge';
import { 
  semillerosPorFacultad2025, semillerosEvolucion, semilleros2025, semilleros2023, ganadoresSemilleros2024 
} from '../../data/data';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
  ComposedChart, Line
} from 'recharts';

export default function Semilleros() {
  const [activeYear, setActiveYear] = useState(2026);
  
  // Aggregate semilleros by facultad for the chart (for 2025)
  const aggregatedByFacultad = semillerosPorFacultad2025.reduce((acc, curr) => {
    const existing = acc.find(item => item.facultad === curr.facultad);
    if (existing) {
      existing.cantidad += curr.cantidad;
    } else {
      acc.push({ facultad: curr.facultad, cantidad: curr.cantidad });
    }
    return acc;
  }, []).sort((a, b) => b.cantidad - a.cantidad);

  return (
    <div className="animate-fade-in-up stagger-children">
      <div className="section-header">
        <div className="section-icon bg-green-900">
          <Sprout className="text-success" size={24} style={{ color: 'var(--color-success)' }} />
        </div>
        <div className="flex-1">
          <h2 className="section-title">Semilleros de Investigación</h2>
          <p className="section-subtitle">Fomento a la investigación temprana en estudiantes</p>
        </div>
        <YearFilter years={[2023, 2024, 2025, 2026]} activeYear={activeYear} onChange={setActiveYear} />
      </div>

      <div className="grid grid-2 gap-6 mb-8">
        <div className="card">
          <h3 className="chart-title">Evolución de Semilleros Reconocidos</h3>
          <p className="chart-subtitle">2023 - 2025</p>
          <div className="chart-container mt-4" style={{ height: 260 }}>
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={semillerosEvolucion} margin={{ top: 20, right: 20, bottom: 20, left: -20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="anio" stroke="var(--color-text-muted)" tick={{ fill: 'var(--color-text-muted)' }} axisLine={false} tickLine={false} />
                <YAxis stroke="var(--color-text-muted)" tick={{ fill: 'var(--color-text-muted)' }} axisLine={false} tickLine={false} />
                <Tooltip cursor={{ fill: 'rgba(255,255,255,0.04)' }} />
                <Bar dataKey="total" name="Total Semilleros" barSize={40} radius={[4, 4, 0, 0]}>
                  {semillerosEvolucion.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.anio === activeYear ? 'var(--color-success)' : 'rgba(52,211,153,0.4)'} />
                  ))}
                </Bar>
                <Line type="monotone" dataKey="total" stroke="var(--color-success)" strokeWidth={2} dot={{ r: 4, fill: 'var(--color-success)' }} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {activeYear === 2025 && (
          <div className="card">
            <h3 className="chart-title">Semilleros por Facultad (Top 8)</h3>
            <p className="chart-subtitle">Distribución en el 2025</p>
            <div className="chart-container mt-4" style={{ height: 260 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={aggregatedByFacultad.slice(0, 8)} layout="vertical" margin={{ top: 5, right: 30, left: 60, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                  <XAxis type="number" stroke="var(--color-text-muted)" tick={{ fill: 'var(--color-text-muted)' }} axisLine={false} tickLine={false} />
                  <YAxis dataKey="facultad" type="category" stroke="var(--color-text-muted)" tick={{ fill: 'var(--color-text-muted)', fontSize: 10 }} axisLine={false} tickLine={false} width={130} />
                  <Tooltip cursor={{ fill: 'rgba(255,255,255,0.04)' }} />
                  <Bar dataKey="cantidad" name="Semilleros" fill="var(--color-success)" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {activeYear === 2024 && (
          <div className="card bg-gradient-to-br from-green-900 to-gray-900 border-green-500/30">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="text-yellow-400" size={24} style={{ color: 'var(--color-accent)' }} />
              <h3 className="chart-title mb-0">Concurso de Proyectos 2024</h3>
            </div>
            <p className="chart-subtitle mb-6">Financiamiento otorgado a proyectos de semilleros ganadores</p>
            
            <div className="flex flex-col gap-4">
              <div className="metric-row py-2">
                <span className="text-muted">Proyectos Ganadores</span>
                <span className="stat-number text-3xl text-success" style={{ color: 'var(--color-success)' }}>20</span>
              </div>
              <div className="metric-row py-2">
                <span className="text-muted">Monto por Proyecto</span>
                <span className="text-xl font-bold">S/ 10,000</span>
              </div>
              <div className="metric-row py-2">
                <span className="text-muted">Monto Total Adjudicado</span>
                <span className="text-xl font-bold text-accent" style={{ color: 'var(--color-accent)' }}>S/ 200,000</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="card">
        <h3 className="chart-title">
          {activeYear === 2024 ? 'Ganadores del Concurso (Selección)' : `Directorio de Semilleros (${activeYear})`}
        </h3>
        
        <div className="table-wrapper mt-6">
          <table>
            <thead>
              <tr>
                {activeYear === 2024 ? (
                  <>
                    <th>Responsable</th>
                    <th>Proyecto</th>
                    <th>Escuela Profesional</th>
                    <th>Monto (S/)</th>
                  </>
                ) : (
                  <>
                    <th>#</th>
                    <th>Nombre del Semillero</th>
                    <th>Facultad</th>
                    {activeYear === 2025 && <th>Escuela Profesional</th>}
                    <th>Docente Responsable</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {activeYear === 2025 && semilleros2025.map((s, i) => (
                <tr key={i}>
                  <td className="text-muted">{s.n}</td>
                  <td className="font-medium">{s.nombre}</td>
                  <td><Badge variant="green">{s.facultad}</Badge></td>
                  <td className="text-xs">{s.ep}</td>
                  <td>{s.responsable}</td>
                </tr>
              ))}
              
              {activeYear === 2024 && ganadoresSemilleros2024.map((s, i) => (
                <tr key={i}>
                  <td className="font-medium">{s.nombre}</td>
                  <td className="text-xs max-w-xs truncate" title={s.proyecto}>{s.proyecto}</td>
                  <td><Badge variant="blue">{s.ep}</Badge></td>
                  <td className="font-mono text-accent" style={{ color: 'var(--color-accent)' }}>{s.monto.toLocaleString()}</td>
                </tr>
              ))}
              
              {activeYear === 2023 && semilleros2023.map((s, i) => (
                <tr key={i}>
                  <td className="text-muted">{i+1}</td>
                  <td className="font-medium">{s.nombre}</td>
                  <td><Badge variant="green">{s.facultad}</Badge></td>
                  <td>{s.responsable}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

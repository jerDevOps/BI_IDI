import { useState } from 'react';
import { BadgeCheck, Medal } from 'lucide-react';
import YearFilter from '../ui/YearFilter';
import { 
  renacytPorAnio, renacytPorNivel2023, renacytPorFacultad2023,
  renacytPorNivel2026, renacytPorFacultad2026, renacytPorEscuela2026
} from '../../data/data';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from 'recharts';

export default function Renacyt() {
  const [activeYear, setActiveYear] = useState(2026);
  const currentTotal = renacytPorAnio.find(r => r.anio === activeYear)?.total || 0;
  
  const dataNivel = activeYear === 2026 ? renacytPorNivel2026 : renacytPorNivel2023;
  const dataFacultad = activeYear === 2026 ? renacytPorFacultad2026 : renacytPorFacultad2023;

  return (
    <div className="animate-fade-in-up stagger-children">
      <div className="section-header">
        <div className="section-icon">
          <BadgeCheck className="text-info" size={24} style={{ color: 'var(--color-info)' }} />
        </div>
        <div className="flex-1">
          <h2 className="section-title">Docentes Investigadores RENACYT</h2>
          <p className="section-subtitle">Investigadores calificados por el CONCYTEC</p>
        </div>
        <YearFilter years={[2023, 2024, 2025, 2026]} activeYear={activeYear} onChange={setActiveYear} />
      </div>

      <div className="grid grid-3 gap-6 mb-8">
        <div className="card col-span-1 flex flex-col justify-center items-center text-center">
          <Medal size={48} style={{ color: 'var(--color-info)', opacity: 0.8 }} className="mb-4" />
          <h3 className="chart-title">Total Investigadores</h3>
          <p className="chart-subtitle">Registrados activos en {activeYear}</p>
          <div className="stat-pill mt-2">
            <span className="stat-number text-6xl" style={{ color: 'var(--color-info)' }}>{currentTotal}</span>
          </div>
          <p className="text-xs text-muted mt-4 mt-auto">
            Nota: La normativa RENACYT (2021) reclasificó a los investigadores en 7 niveles.
          </p>
        </div>
        
        <div className="card" style={{ gridColumn: 'span 2' }}>
          <h3 className="chart-title">Evolución de Investigadores RENACYT</h3>
          <p className="chart-subtitle">Periodo 2021 - 2025</p>
          <div className="chart-container mt-4" style={{ height: 250 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={renacytPorAnio} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="anio" stroke="var(--color-text-muted)" axisLine={false} tickLine={false} />
                <YAxis stroke="var(--color-text-muted)" axisLine={false} tickLine={false} />
                <Tooltip cursor={{ fill: 'rgba(255,255,255,0.04)' }} />
                <Bar dataKey="total" name="Investigadores" radius={[6, 6, 0, 0]} maxBarSize={60}>
                  {renacytPorAnio.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.anio === activeYear ? 'var(--color-info)' : 'var(--color-primary-glow)'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-2 gap-6">
        <div className="chart-card">
          <h3 className="chart-title">Distribución por Nivel RENACYT ({activeYear})</h3>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dataNivel} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="var(--color-border)" />
                <XAxis type="number" stroke="var(--color-text-light)" />
                <YAxis dataKey="name" type="category" width={80} stroke="var(--color-text-light)" />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)', borderRadius: '8px' }}
                  itemStyle={{ color: 'var(--color-text)' }}
                />
                <Bar dataKey="value" fill="var(--color-primary)" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="chart-card">
          <h3 className="chart-title">Top Facultades con más Investigadores ({activeYear})</h3>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dataFacultad.slice(0, 10)} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border)" />
                <XAxis dataKey="name" stroke="var(--color-text-light)" tick={{fontSize: 10}} angle={-45} textAnchor="end" height={80} />
                <YAxis stroke="var(--color-text-light)" />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)', borderRadius: '8px' }}
                  itemStyle={{ color: 'var(--color-text)' }}
                />
                <Bar dataKey="investigadores" fill="var(--color-secondary)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {activeYear === 2026 && (
        <div className="chart-card" style={{marginTop: '2rem'}}>
          <h3 className="chart-title">Distribución por Escuela Profesional ({activeYear})</h3>
          <div className="chart-container" style={{height: '400px'}}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={renacytPorEscuela2026.slice(0, 20)} layout="vertical" margin={{ top: 5, right: 30, left: 180, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="var(--color-border)" />
                <XAxis type="number" stroke="var(--color-text-light)" />
                <YAxis dataKey="name" type="category" width={170} stroke="var(--color-text-light)" tick={{fontSize: 11}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)', borderRadius: '8px' }}
                  itemStyle={{ color: 'var(--color-text)' }}
                />
                <Bar dataKey="investigadores" fill="#a78bfa" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
}

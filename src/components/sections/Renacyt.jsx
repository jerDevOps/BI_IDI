import { useState } from 'react';
import { BadgeCheck, Medal } from 'lucide-react';
import YearFilter from '../ui/YearFilter';
import WebPreviewCard from '../ui/WebPreviewCard';
import { 
  renacytPorAnio
} from '../../data/data';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from 'recharts';

export default function Renacyt() {
  const [activeYear, setActiveYear] = useState(2026);
  const currentTotal = renacytPorAnio.find(r => r.anio === activeYear)?.total || 0;

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

      {/* Vista previa del portal VRI — reemplaza las gráficas de nivel y facultad */}
      <WebPreviewCard
        url="https://web.vriunap.pe/instituto/investigamos/investigadores"
        label="Ver Investigadores en Portal VRI"
        color="#0277bd"
      />

    </div>
  );
}


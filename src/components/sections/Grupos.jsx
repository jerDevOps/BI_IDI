import { useState } from 'react';
import { Users, Trophy } from 'lucide-react';
import YearFilter from '../ui/YearFilter';
import Badge from '../ui/Badge';
import { 
  grupos, gruposPorArea, gruposEvolucion, ganadoresGrupos2024
} from '../../data/data';
import { 
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend
} from 'recharts';

export default function Grupos() {
  const [activeYear, setActiveYear] = useState(2026);
  const COLORS = ['#4f79f7', '#34d399', '#f0b429', '#f87171', '#a78bfa', '#fb923c', '#22d3ee', '#ec4899', '#84cc16'];
  
  const activeGrupos = grupos.filter(g => g.anioReconocimiento <= activeYear);

  return (
    <div className="animate-fade-in-up stagger-children">
      <div className="section-header">
        <div className="section-icon">
          <Users className="text-accent" size={24} style={{ color: 'var(--color-accent)' }} />
        </div>
        <div className="flex-1">
          <h2 className="section-title">Grupos de Investigación</h2>
          <p className="section-subtitle">Equipos multidisciplinarios de alta especialización</p>
        </div>
        <YearFilter years={[2024, 2025, 2026]} activeYear={activeYear} onChange={setActiveYear} />
      </div>

      <div className="grid grid-3 gap-6 mb-8">
        <div className="card col-span-1">
          <h3 className="chart-title">Total Grupos Reconocidos</h3>
          <p className="chart-subtitle">Acumulado a {activeYear}</p>
          <div className="stat-pill mt-4 mb-6">
            <span className="stat-number text-5xl" style={{ color: 'var(--color-accent)' }}>
              {gruposEvolucion.find(e => e.anio === activeYear)?.total || 0}
            </span>
            <span className="stat-unit">grupos</span>
          </div>
          
          <div className="divider" />
          
          <div className="flex flex-col gap-3">
            <div className="metric-row">
              <span className="text-muted">Nuevos reconocimientos en {activeYear}</span>
              <span className="metric-value text-accent" style={{ color: 'var(--color-accent)' }}>
                +{gruposEvolucion.find(e => e.anio === activeYear)?.nuevos || 0}
              </span>
            </div>
            {activeYear === 2024 && (
              <div className="metric-row">
                <span className="text-muted">Proyectos financiados (Concurso)</span>
                <span className="metric-value text-success" style={{ color: 'var(--color-success)' }}>6</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="card" style={{ gridColumn: 'span 2' }}>
          <h3 className="chart-title">Distribución por Área Temática</h3>
          <p className="chart-subtitle">Grupos agrupados por disciplina principal</p>
          <div className="chart-container flex items-center justify-center mt-2" style={{ height: 280 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={gruposPorArea}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="cantidad"
                  nameKey="area"
                >
                  {gruposPorArea.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${value} grupos`, 'Cantidad']}
                  contentStyle={{ backgroundColor: 'rgba(15, 20, 40, 0.95)', border: '1px solid var(--color-border)' }}
                />
                <Legend layout="vertical" verticalAlign="middle" align="right" wrapperStyle={{ fontSize: '11px', color: 'var(--color-text-secondary)' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {activeYear === 2024 ? (
        <div className="card border-yellow-500/30">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <Trophy className="text-yellow-400" size={24} style={{ color: 'var(--color-accent)' }} />
              <div>
                <h3 className="chart-title mb-0">Ganadores Convocatoria Proyectos 2024</h3>
                <p className="chart-subtitle">Total adjudicado: S/ 120,000</p>
              </div>
            </div>
          </div>
          
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Responsable</th>
                  <th>Título del Proyecto</th>
                  <th>Escuela Profesional</th>
                  <th>Puntaje</th>
                  <th>Monto</th>
                </tr>
              </thead>
              <tbody>
                {ganadoresGrupos2024.map((g, i) => (
                  <tr key={i}>
                    <td className="font-medium whitespace-nowrap">{g.nombre}</td>
                    <td className="text-xs" style={{ maxWidth: '300px' }}>{g.proyecto}</td>
                    <td><Badge variant="gold">{g.ep}</Badge></td>
                    <td className="text-center font-bold text-success" style={{ color: 'var(--color-success)' }}>{g.puntaje}</td>
                    <td className="font-mono text-accent" style={{ color: 'var(--color-accent)' }}>S/ {g.monto.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="card">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="chart-title">Directorio de Grupos de Investigación</h3>
              <p className="chart-subtitle">Lista de los {activeGrupos.length} grupos reconocidos hasta {activeYear}</p>
            </div>
            <Badge variant="gold">{activeGrupos.length} Grupos</Badge>
          </div>
          
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre del Grupo</th>
                  <th>Área / Disciplina</th>
                  <th>Facultad de Origen</th>
                  <th>Año Rec.</th>
                </tr>
              </thead>
              <tbody>
                {activeGrupos.map((g, i) => (
                  <tr key={i}>
                    <td className="text-muted">{i+1}</td>
                    <td className="font-medium">{g.nombre}</td>
                    <td><Badge variant="purple">{g.area}</Badge></td>
                    <td className="text-sm">{g.facultad}</td>
                    <td className="text-center text-xs">
                      <span className={g.anioReconocimiento === 2025 ? 'text-accent font-bold' : ''} style={g.anioReconocimiento === 2025 ? { color: 'var(--color-accent)' } : {}}>
                        {g.anioReconocimiento}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

import { useState } from 'react';
import { Building2, Layers } from 'lucide-react';
import YearFilter from '../ui/YearFilter';
import Badge from '../ui/Badge';
import { institutos, institutosPorFacultad } from '../../data/data';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell 
} from 'recharts';

export default function Institutos() {
  const [activeYear, setActiveYear] = useState(2025);
  
  // Filter institutos by active year
  const activeInstitutos = institutos.filter(inst => {
    if (activeYear === 2023) return inst.activo2023;
    if (activeYear === 2024) return inst.activo2024;
    return inst.activo2025;
  });

  return (
    <div className="animate-fade-in-up stagger-children">
      <div className="section-header">
        <div className="section-icon">
          <Building2 className="text-primary" size={24} />
        </div>
        <div className="flex-1">
          <h2 className="section-title">Institutos de Investigación</h2>
          <p className="section-subtitle">Centros especializados para la investigación por facultad</p>
        </div>
        <YearFilter years={[2023, 2024, 2025]} activeYear={activeYear} onChange={setActiveYear} />
      </div>

      <div className="grid grid-3 gap-6 mb-8">
        <div className="card col-span-1">
          <h3 className="chart-title">Total Institutos Activos</h3>
          <p className="chart-subtitle">En {activeYear}</p>
          <div className="stat-pill mt-4">
            <span className="stat-number text-5xl">{activeInstitutos.length}</span>
            <span className="stat-unit">institutos</span>
          </div>
          
          <div className="divider" />
          
          <div className="flex flex-col gap-3">
            <div className="metric-row">
              <div className="metric-label">
                <div className="metric-dot bg-blue-500" style={{ background: 'var(--color-primary)' }} />
                <span>Creados 2020-2021</span>
              </div>
              <span className="metric-value">13</span>
            </div>
            <div className="metric-row">
              <div className="metric-label">
                <div className="metric-dot bg-green-500" style={{ background: 'var(--color-success)' }} />
                <span>Creados 2022</span>
              </div>
              <span className="metric-value">11</span>
            </div>
            <div className="metric-row">
              <div className="metric-label">
                <div className="metric-dot bg-orange-500" style={{ background: 'var(--color-warning)' }} />
                <span>Creados 2023</span>
              </div>
              <span className="metric-value">9</span>
            </div>
            <div className="metric-row">
              <div className="metric-label">
                <div className="metric-dot bg-purple-500" style={{ background: 'var(--chart-5)' }} />
                <span>Nuevos (2024-2025)</span>
              </div>
              <span className="metric-value">4</span>
            </div>
          </div>
        </div>
        
        <div className="card" style={{ gridColumn: 'span 2' }}>
          <h3 className="chart-title">Institutos por Facultad</h3>
          <p className="chart-subtitle">Distribución general (todos los años)</p>
          <div className="chart-container mt-4" style={{ height: 280 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={institutosPorFacultad} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" stroke="var(--color-text-muted)" tick={{ fill: 'var(--color-text-muted)' }} axisLine={false} tickLine={false} />
                <YAxis dataKey="facultad" type="category" stroke="var(--color-text-muted)" tick={{ fill: 'var(--color-text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} width={150} />
                <Tooltip cursor={{ fill: 'rgba(255,255,255,0.04)' }} />
                <Bar dataKey="count" name="Institutos" radius={[0, 4, 4, 0]}>
                  {institutosPorFacultad.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index < 3 ? 'var(--color-primary)' : 'var(--color-primary-light)'} fillOpacity={index < 3 ? 1 : 0.6} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="chart-title">Directorio de Institutos ({activeYear})</h3>
            <p className="chart-subtitle">Lista detallada de los {activeInstitutos.length} institutos activos</p>
          </div>
          <Badge variant="blue"><Layers size={14} className="mr-1 inline" /> {activeInstitutos.length} Registros</Badge>
        </div>
        
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre del Instituto</th>
                <th>Sigla</th>
                <th>Facultad</th>
                <th>Director / Responsable</th>
                <th>Creación / Res.</th>
              </tr>
            </thead>
            <tbody>
              {activeInstitutos.map(inst => (
                <tr key={inst.id}>
                  <td className="text-muted">#{inst.id}</td>
                  <td>{inst.nombre}</td>
                  <td><Badge variant="blue">{inst.sigla}</Badge></td>
                  <td>{inst.facultad}</td>
                  <td>{inst.director}</td>
                  <td>
                    <div>{inst.anioCreacion}</div>
                    <div className="text-xs text-muted">{inst.resolucion}</div>
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

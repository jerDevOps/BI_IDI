import { BookOpen, Database } from 'lucide-react';
import Badge from '../ui/Badge';
import { 
  repositorioPosgrado2021
} from '../../data/data';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

export default function Publicaciones() {
  const chartData = [...repositorioPosgrado2021].sort((a, b) => b.total - a.total);

  return (
    <div className="animate-fade-in-up stagger-children">
      <div className="section-header">
        <div className="section-icon bg-purple-900/40">
          <BookOpen className="text-purple-400" size={24} style={{ color: '#c4b5fd' }} />
        </div>
        <div className="flex-1">
          <h2 className="section-title">Publicaciones y Repositorio</h2>
          <p className="section-subtitle">Producción científica y acervo bibliográfico institucional</p>
        </div>
      </div>

      <div className="grid grid-2 gap-6 mb-8">
        <div className="card">
          <div className="flex items-center gap-3 mb-4">
            <Database className="text-purple-400" size={24} style={{ color: '#a78bfa' }} />
            <h3 className="chart-title mb-0">Repositorio Institucional</h3>
          </div>
          <p className="chart-subtitle mb-6">Tesis de Posgrado almacenadas en el sistema (2021)</p>
          
          <div className="chart-container" style={{ height: 350 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 30, left: 10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" stroke="var(--color-text-muted)" axisLine={false} tickLine={false} />
                <YAxis dataKey="programa" type="category" stroke="var(--color-text-muted)" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} width={180} />
                <Tooltip cursor={{ fill: 'rgba(255,255,255,0.04)' }} />
                <Bar dataKey="total" name="Tesis" fill="var(--chart-5)" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="card flex-1 bg-gradient-to-br from-indigo-900/50 to-transparent border-indigo-500/30">
            <h3 className="chart-title">Revistas Científicas UNA-Puno</h3>
            <p className="chart-subtitle">Publicaciones editadas por la universidad</p>
            
            <div className="flex flex-col gap-4 mt-6">
              <div className="p-4 rounded-lg bg-black/20 border border-white/5">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-lg">Comuni@cción</h4>
                  <Badge variant="green">Indizada Scopus</Badge>
                </div>
                <p className="text-sm text-secondary">Revista de Investigación en Comunicación y Desarrollo.</p>
              </div>
              
              <div className="p-4 rounded-lg bg-black/20 border border-white/5">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-lg">Revista Investigaciones Altoandinas</h4>
                  <Badge variant="blue">SciELO / WoS</Badge>
                </div>
                <p className="text-sm text-secondary">Publicación multidisciplinaria orientada al desarrollo sostenible en ecosistemas altoandinos.</p>
              </div>
            </div>
          </div>
          
          <div className="card">
            <h3 className="chart-title">Líneas de Investigación</h3>
            <p className="chart-subtitle">Estructura temática aprobada</p>
            
            <div className="flex justify-between mt-6 px-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">12</div>
                <div className="text-xs text-muted uppercase tracking-wider">Líneas Generales</div>
              </div>
              <div className="w-px bg-white/10" />
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">60</div>
                <div className="text-xs text-muted uppercase tracking-wider">Sublíneas (2025)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

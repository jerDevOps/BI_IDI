import { LayoutDashboard, Building2, Sprout, Users, BadgeCheck, FileBarChart, BookOpen } from 'lucide-react';

export default function Sidebar({ activeSection, setActiveSection }) {
  const navItems = [
    { id: 'overview', label: 'Resumen General', icon: LayoutDashboard },
    { id: 'institutos', label: 'Institutos', icon: Building2 },
    { id: 'semilleros', label: 'Semilleros', icon: Sprout },
    { id: 'grupos', label: 'Grupos de Inv.', icon: Users },
    { id: 'renacyt', label: 'RENACYT', icon: BadgeCheck },
    { id: 'fedu', label: 'Proyectos FEDU', icon: FileBarChart },
    { id: 'publicaciones', label: 'Publicaciones', icon: BookOpen },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="sidebar-logo-icon">IDI</div>
        <div className="sidebar-logo-text">
          <strong>UNA PUNO</strong>
          <span>Instituto de Investigación</span>
        </div>
      </div>
      
      <nav className="sidebar-nav">
        <div className="sidebar-section-label">Dashboard 2021-2026</div>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              className={`nav-item w-full bg-transparent border-0 flex items-center justify-start text-left ${isActive ? 'active' : ''}`}
              onClick={() => setActiveSection(item.id)}
            >
              <Icon className="nav-item-icon" size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <div>Memoria Anual</div>
        <div style={{ color: 'var(--color-primary-light)', fontWeight: 600 }}>2021 - 2026</div>
      </div>
    </aside>
  );
}

import { LayoutDashboard, Building2, Sprout, Users, BadgeCheck, DollarSign } from 'lucide-react';

export default function Sidebar({ activeSection, setActiveSection, isOpen }) {
  const navItems = [
    { id: 'overview', label: 'Resumen General', icon: LayoutDashboard },
    { id: 'institutos', label: 'Institutos', icon: Building2 },
    { id: 'semilleros', label: 'Semilleros', icon: Sprout },
    { id: 'grupos', label: 'Grupos de Inv.', icon: Users },
    { id: 'renacyt', label: 'RENACYT', icon: BadgeCheck },
    { id: 'financiamiento', label: 'Financiamiento', icon: DollarSign },
  ];


  return (
    <aside className={`sidebar${isOpen ? ' sidebar-open' : ''}`}>
      <div className="sidebar-logo">
        <img
          src="/images/Instituto.png"
          alt="Instituto de Investigación UNA Puno"
          style={{ width: '100%', maxWidth: 160, objectFit: 'contain', borderRadius: 8 }}
        />
      </div>

      <nav className="sidebar-nav">
        <div className="sidebar-section-label">Panel de Control</div>
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
        <div>© Desarrollado por: JRGC - IDI</div>
      </div>
    </aside>
  );
}

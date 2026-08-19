import { Bell, UserCircle, Leaf } from 'lucide-react';

export default function Header({ title }) {
  return (
    <header className="header">
      <div className="header-breadcrumb">
        <Leaf size={15} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
        <span style={{ margin: '0 6px', opacity: 0.4 }}>/</span>
        <strong>{title}</strong>
      </div>

      <div className="header-right">
        <div className="header-stat">
          <span>Datos actualizados:</span>
          <strong>2026</strong>
        </div>
        <div className="header-stat">
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4caf50', display: 'inline-block', marginRight: 4 }} />
          <strong style={{ color: '#2e7d32' }}>En línea</strong>
        </div>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginLeft: 8 }}>
          <Bell size={19} style={{ color: '#78909c', cursor: 'pointer' }} />
          <img
            src="/images/unapuno.png"
            alt="UNA Puno"
            style={{
              width: 36, height: 36, borderRadius: '50%',
              objectFit: 'cover', cursor: 'pointer',
              border: '2px solid #c8e6c9',
            }}
          />
        </div>
      </div>
    </header>
  );
}

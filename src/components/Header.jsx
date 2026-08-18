import { Bell, UserCircle, Leaf } from 'lucide-react';

export default function Header({ title }) {
  return (
    <header className="header">
      <div className="header-breadcrumb">
        <Leaf size={15} style={{ color: 'var(--color-primary)', flexShrink:0 }} />
        <span>VRI — IDI</span>
        <span style={{ margin:'0 6px', opacity:0.4 }}>/</span>
        <strong>{title}</strong>
      </div>

      <div className="header-right">
        <div className="header-stat">
          <span>Datos actualizados:</span>
          <strong>2026</strong>
        </div>
        <div className="header-stat">
          <span style={{ width:8, height:8, borderRadius:'50%', background:'#4caf50', display:'inline-block', marginRight:4 }} />
          <strong style={{ color:'#2e7d32' }}>En línea</strong>
        </div>
        <div style={{ display:'flex', gap:14, alignItems:'center', marginLeft:8 }}>
          <Bell size={19} style={{ color:'#78909c', cursor:'pointer' }} />
          <div style={{
            width:32, height:32, borderRadius:'50%',
            background:'linear-gradient(135deg, #43a047, #1b5e20)',
            display:'flex', alignItems:'center', justifyContent:'center',
            cursor:'pointer', color:'white', fontWeight:800, fontSize:'0.78rem',
          }}>
            UNA
          </div>
        </div>
      </div>
    </header>
  );
}

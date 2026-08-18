import { Bell, Search, UserCircle } from 'lucide-react';

export default function Header({ title }) {
  return (
    <header className="header">
      <div className="header-breadcrumb">
        <span>Dashboard</span>
        <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
        <strong>{title}</strong>
      </div>
      
      <div className="header-right">
        <div className="header-stat">
          <span>Actualizado:</span>
          <strong>2025</strong>
        </div>
        <div className="flex gap-4 items-center ml-4">
          <Search size={20} className="text-secondary cursor-pointer hover:text-primary transition-colors" />
          <Bell size={20} className="text-secondary cursor-pointer hover:text-primary transition-colors" />
          <UserCircle size={24} className="text-blue cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

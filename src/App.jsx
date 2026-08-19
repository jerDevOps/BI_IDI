import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Overview from './components/sections/Overview';
import Institutos from './components/sections/Institutos';
import Semilleros from './components/sections/Semilleros';
import Grupos from './components/sections/Grupos';
import Renacyt from './components/sections/Renacyt';
import Fedu from './components/sections/Fedu';
import Publicaciones from './components/sections/Publicaciones';
import Financiamiento from './components/sections/Financiamiento';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const getSectionTitle = () => {
    switch(activeSection) {
      case 'overview': return 'Resumen General';
      case 'institutos': return 'Institutos de Investigación';
      case 'semilleros': return 'Semilleros de Investigación';
      case 'grupos': return 'Grupos de Investigación';
      case 'renacyt': return 'Docentes RENACYT';
      case 'fedu': return 'Proyectos FEDU';
      case 'publicaciones': return 'Publicaciones y Repositorio';
      case 'financiamiento': return 'Financiamiento de Proyectos';
      default: return 'Dashboard';
    }
  };

  const handleNavigation = (section) => {
    setActiveSection(section);
    setSidebarOpen(false); // cierra el drawer al navegar en móvil
  };

  return (
    <div className="app-layout">
      {/* Overlay para cerrar sidebar en móvil */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Sidebar
        activeSection={activeSection}
        setActiveSection={handleNavigation}
        isOpen={sidebarOpen}
      />

      <main className="main-content">
        <Header
          title={getSectionTitle()}
          onMenuClick={() => setSidebarOpen(prev => !prev)}
          sidebarOpen={sidebarOpen}
        />

        <div className="page-content">
          {activeSection === 'overview' && <Overview />}
          {activeSection === 'institutos' && <Institutos />}
          {activeSection === 'semilleros' && <Semilleros />}
          {activeSection === 'grupos' && <Grupos />}
          {activeSection === 'renacyt' && <Renacyt />}
          {activeSection === 'fedu' && <Fedu />}
          {activeSection === 'publicaciones' && <Publicaciones />}
          {activeSection === 'financiamiento' && <Financiamiento />}
        </div>
      </main>
    </div>
  );
}

export default App;


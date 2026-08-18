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
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('overview');

  const getSectionTitle = () => {
    switch(activeSection) {
      case 'overview': return 'Resumen General';
      case 'institutos': return 'Institutos de Investigación';
      case 'semilleros': return 'Semilleros de Investigación';
      case 'grupos': return 'Grupos de Investigación';
      case 'renacyt': return 'Docentes RENACYT';
      case 'fedu': return 'Proyectos FEDU';
      case 'publicaciones': return 'Publicaciones y Repositorio';
      default: return 'Dashboard';
    }
  };

  return (
    <div className="app-layout">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="main-content">
        <Header title={getSectionTitle()} />
        
        <div className="page-content">
          {activeSection === 'overview' && <Overview />}
          {activeSection === 'institutos' && <Institutos />}
          {activeSection === 'semilleros' && <Semilleros />}
          {activeSection === 'grupos' && <Grupos />}
          {activeSection === 'renacyt' && <Renacyt />}
          {activeSection === 'fedu' && <Fedu />}
          {activeSection === 'publicaciones' && <Publicaciones />}
        </div>
      </main>
    </div>
  );
}

export default App;

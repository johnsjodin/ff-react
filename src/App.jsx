import { useState } from 'react'
import Header from './components/Header.jsx'
import LandingChoice from './components/LandingChoice.jsx'
import SavedFactionsList from './components/SavedFactionsList.jsx'
import FactionSheet from './components/FactionSheet.jsx'
import Footer from './components/Footer.jsx'
import Taskbar from './components/Taskbar.jsx'

function App() {
  const [view, setView] = useState('landing');
  const [editingFaction, setEditingFaction] = useState(null);

  function goToCreate() {
    setEditingFaction(null);
    setView('sheet');
  }

  function goToLoad() {
    setView('load');
  }

  function goToEdit(faction) {
    setEditingFaction(faction);
    setView('sheet');
  }

  function goHome() {
  setView('landing');
}

  const titles = {
    landing: 'Faction Factory 1.0',
    load: 'C:\\FACTIONS\\*.FAC - File Manager',
    sheet: `${editingFaction?.name || 'Untitled'}.FAC - Faction Editor`,
  };

  return (
    <>
      <Header onHome={goHome} />
      <main className="window">
        <div className="title-bar">
          <span className="title-bar-text">{titles[view]}</span>
          <div className="title-bar-controls">
            <button aria-hidden="true" tabIndex={-1}>_</button>
            <button aria-hidden="true" tabIndex={-1}>□</button>
            <button aria-label="Close" onClick={goHome}>×</button>
          </div>
        </div>
        <div className="window-body">
          {view === 'landing' && <LandingChoice onCreate={goToCreate} onLoad={goToLoad} />}
          {view === 'load' && <SavedFactionsList onEdit={goToEdit} />}
          {view === 'sheet' && <FactionSheet key={editingFaction?.id ?? 'new'} faction={editingFaction} />}
        </div>
      </main>
      <Footer />
      <Taskbar title={titles[view]} onStart={goHome} />
    </>
  );
}

export default App

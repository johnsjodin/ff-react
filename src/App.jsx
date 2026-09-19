import { useState } from 'react'
import Header from './components/Header.jsx'
import LandingChoice from './components/LandingChoice.jsx'
import SavedFactionsList from './components/SavedFactionsList.jsx'
import FactionSheet from './components/FactionSheet.jsx'

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

  return (
    <>
      <Header />
      {view === 'landing' && <LandingChoice onCreate={goToCreate} onLoad={goToLoad} />}
      {view === 'load' && <SavedFactionsList onEdit={goToEdit} />}
      {view === 'sheet' && <FactionSheet key={editingFaction?.id ?? 'new'} faction={editingFaction} />}
    </>
  );
}

export default App
import { useState } from 'react'
import Header from './components/Header.jsx'
import LandingChoice from './components/LandingChoice.jsx'
import SavedFactionsList from './components/SavedFactionsList.jsx'
import FactionSheet from './components/FactionSheet.jsx'

function App() {
  const [view, setView] = useState('landing');
  
  function goToCreate() {
    setView('sheet');
  }

  function goToLoad() {
    setView('load');
  }

  return (
    <>
      <Header />
      {view === 'landing' && <LandingChoice onCreate={goToCreate} onLoad={goToLoad} />}
      {view === 'load' && <SavedFactionsList />}
      {view === 'sheet' && <FactionSheet />}
    </>
  );
}

export default App
import React from 'react';
import EH from './components/EH'
import AppBar from './components/AppBar'
import FishTable from './components/FishTable'
function App() {
  return (
    <div className="App">
      <AppBar/>
      <EH/>
      <FishTable/>
    </div>
  );
}

export default App;

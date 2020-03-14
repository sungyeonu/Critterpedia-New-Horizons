import React, { useState } from 'react';
import IconsContainer from './components/IconsContainer'
import AppBar from './components/AppBar'
import FishTable from './components/FishTable'
import BugsTable from './components/BugsTable'
function App() {
  const [isToggled, setToggled] = useState(true);
  const [category, setCategory] = useState("fish");
  const toggleTrueFalse = () => setToggled(!isToggled);

  return (
    <div className="App">
      {/* <AppBar/> */}
      <button onClick={toggleTrueFalse}>
        <h3>Toggle me</h3>
      </button>
      <IconsContainer 
        // category={category}
        setCategory={setCategory}
      />
      {
        isToggled
          ?
          <FishTable />
          :
          <BugsTable />
      }
    </div>
  );
}

export default App;

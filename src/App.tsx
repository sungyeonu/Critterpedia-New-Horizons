import React, { useState } from 'react';
import IconsContainer from './components/IconsContainer'
import AppBar from './components/AppBar'
import FishTable from './components/FishTable'
import BugsTable from './components/BugsTable'

// interface IconsContainerProps {
//   category: string,
// }
const [category, setCategory] = useState("fish");

function App({setCategory}: any) {
  const [isToggled, setToggled] = useState(true);
  const toggleTrueFalse = () => setToggled(!isToggled);

  const IconsContainerProps = {
    c: category
  }

  return (
    <div className="App">
      {/* <AppBar/> */}
      <button onClick={toggleTrueFalse}>
        <h3>Toggle me</h3>
      </button>
      <IconsContainer 
        // key = {isToggled}
        // {...IconsContainerProps}
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

import React, { useState } from 'react';
import IconsContainer from './components/IconsContainer'
import FishTable from './components/FishTable'
import BugsTable from './components/BugsTable'
import Seasons from './components/Seasons';

function App() {
  const [category, setCategory] = useState("fish");
  const mystyle = {
    backgroundColor: "azure",
  };
  
  let table;
  if (category === "fish") {
    table = <FishTable />;
  }
  else if (category === "bugs") {
    table = <BugsTable />;
  }

  return (
    <div className="App" style={mystyle}>
      <IconsContainer
        setCategory={setCategory}
      />
      <Seasons/>
      {table}
    </div>
  );
}

export default App;

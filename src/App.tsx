import React, { useState } from 'react';
import IconsContainer from './containers/IconsContainer';
import FishTable from './components/FishTable';
import BugsTable from './components/BugsTable';

export default function App() {
  const [category, setCategory] = useState("fish");
  
  let table;
  if (category === "fish") {
    table = <FishTable />;
  }
  else if (category === "bugs") {
    table = <BugsTable />;
  }

  return (
    <div className="App">
      <IconsContainer
        setCategory={setCategory}
      />
      {table}
    </div>
  );
}
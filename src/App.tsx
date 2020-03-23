import React, { useState } from 'react';
import IconsContainer from './containers/IconsContainer';
import FishTable from './components/FishTable';
import BugsTable from './components/BugsTable';
import Typography from '@material-ui/core/Typography';

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
      <Typography variant="body1" gutterBottom>
        The below table is for Northern Hemisphere Time Sync/Zone. 
        This table can still be used in the Southern Hemisphere, add 6 to the months eg. March + 6 = September
      </Typography>
      <Typography variant="body2" gutterBottom>
        Missing/Broken information is not Sungyeon's fault. Admins of animalcrossing.fandom.com have not uploaded data on time &#128544;
      </Typography>
      <IconsContainer
        setCategory={setCategory}
      />
      {table}
      <Typography variant="body2" gutterBottom>
        {/* v1.0 Data credits: animalcrossing.fandom.com/wiki/ */}
        {/* v1.1 Data credits: animalcrossing.fandom.com/wiki/ */}
      </Typography>
    </div>
  );
}
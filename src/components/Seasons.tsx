import React from 'react';
import Circle from './Circle';

interface SeasonsProps {
  jan: string, 
  feb: string, 
  mar: string, 
  apr: string, 
  may: string, 
  jun: string, 
  jul: string, 
  aug: string, 
  sep: string, 
  oct: string, 
  nov: string, 
  dec: string
}

const seasonsStyle = {
  display: 'flex',
};

const colorCodes = {
  winter: "#01BFFF",
  spring: "#A7FC01",
  summer: "#FFFE00",
  fall: "#FF7F00"
};

const wi = colorCodes.winter;
const sp = colorCodes.spring;
const su = colorCodes.summer;
const fa = colorCodes.fall;
const w = "#ffffff";


export default function Seasons() {
  return (
    <div style={seasonsStyle}>
      <Circle
        borderColor={wi}
        fillColor={wi}
      />
      <Circle
        borderColor={wi}
        fillColor={w}
      />
      <Circle
        borderColor={sp}
        fillColor={sp}
      />
      <Circle
        borderColor={sp}
        fillColor={w}
      />
      <Circle
        borderColor={sp}
        fillColor={w}
      />
      <Circle
        borderColor={su}
        fillColor={su}
      />
      <Circle
        borderColor={su}
        fillColor={su}
      />
      <Circle
        borderColor={su}
        fillColor={w}
      />
      <Circle
        borderColor={fa}
        fillColor={w}
      />
      <Circle
        borderColor={fa}
        fillColor={fa}
      />
      <Circle
        borderColor={fa}
        fillColor={fa}
      />
      <Circle
        borderColor={wi}
        fillColor={wi}
      />
    </div>
  );
}

// return ooo ooo ooo ooo, filled or not

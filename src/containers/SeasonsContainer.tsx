import React from 'react';
import Circle from '../components/Circle';

interface SeasonsContainerProps {
  seasons: string;
}

const seasonsStyle = {
  display: 'flex',
};

const colorCodes = {
  winter: "#01BFFF",
  spring: "#A7FC01",
  summer: "#FFFE00",
  fall: "#FF7F00",
  white: "#FFFFFF"
};

function converter(s: string, month: number) {
  let fc;
  let bc;
  if (month <= 2 || month === 12) {
    bc = colorCodes.winter;
  }
  else if (month >= 3 && month < 6) {
    bc = colorCodes.spring;
  }
  else if (month >= 6 && month < 9) {
    bc = colorCodes.summer;
  } 
  else if (month >= 9 && month < 12) {
    bc = colorCodes.fall;
  }
  else {
    bc = colorCodes.white;
  }
  if (s === "\u2713") {
    fc = bc;
  }
  else {
    fc = colorCodes.white;
  }
  return (
    <Circle
      borderColor={bc}
      fillColor={fc}
    />
  )
}
export default function SeasonsContainer({ seasons }: SeasonsContainerProps) {
  return (
    <div style={seasonsStyle}>
      {converter(seasons[0], 1)}
      {converter(seasons[1], 2)}
      {converter(seasons[2], 3)}

      {converter(seasons[3], 4)}
      {converter(seasons[4], 5)}
      {converter(seasons[5], 6)}

      {converter(seasons[6], 7)}
      {converter(seasons[7], 8)}
      {converter(seasons[8], 9)}

      {converter(seasons[9], 10)}
      {converter(seasons[10], 11)}
      {converter(seasons[11], 12)}
    </div>
  );
}

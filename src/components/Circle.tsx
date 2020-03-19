import React from 'react';
const circleStyle = {
  padding: 10,
  margin: 20,
  display: "inline-block",
  borderRadius: "50%",
  width: 100,
  height: 100,
}


export default function Circles() {
  return (
    <div style={circleStyle}>
      <svg height="10" width="10">
        <circle cx="5" cy="5" r="4" stroke="black" stroke-width="1" fill="red" />
      </svg>
      <svg height="10" width="10">
        <circle cx="5" cy="5" r="4" stroke="black" stroke-width="1" fill="red" />
      </svg>
    </div>
  )
}

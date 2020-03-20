import React from 'react';

interface CircleProps {
  borderColor: string,
  fillColor: string
}
const circleStyle = {
}


export default function Circle({ borderColor, fillColor }: CircleProps) {

  return (
    <div>
      <svg height="12" width="12">
        <circle style={circleStyle} cx={5} cy={5} r={4} stroke={borderColor} stroke-width="1" fill={fillColor} />
      </svg>
    </div>
  )
}

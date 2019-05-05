import React from 'react';

const LegendBullet = (props) => {
  const {entry, filter} = props
  return (
    <svg className="recharts-surface" width="20" height="20" viewBox="0 0 32 32" version="1.1" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px'}}>
      <path stroke={entry.color} strokeWidth="3px" fill={filter.includes(entry.dataKey) ? entry.color : 'none'} d="M0,4h32v24h-32z" className="recharts-legend-icon"></path>
    </svg>
  )
}

export default LegendBullet;

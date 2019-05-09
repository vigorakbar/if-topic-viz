import React, {useState} from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { total } from 'data';
import { PALETTE } from 'constants/color';

const totalData = total.sort((a,b) => {
  if (a.total > b.total) return 1;
  if (a.total < b.total) return -1;
  return 0;
})

const SimpleBarChart = () => {
  const [opacity, setOpacity] = useState(1);
  const [id, setId] = useState('');
  return (
    <BarChart
      width={800}
      height={420}
      data={total}
      margin={{top: 5, right: 30, left: 20, bottom: 5}}
      layout="vertical"
    >
      <XAxis type="number" domain={[0,700]} tickCount={8} tick={{stroke:"rgb(141,102,22)", strokeWidth: 0.6}} />
      <YAxis dataKey="name" type="category" width={200} tick={{stroke:"rgb(141,102,22)", strokeWidth: 0.6}}/>
      {id && <Tooltip cursor={{fill: 'none'}} isAnimationActive={false} />}
      <Bar dataKey="total" fill="#8884d8">
        {totalData.map((data) => {
          return <Cell fill={PALETTE[data.id]} key={data.id} onMouseEnter={() => { setOpacity(0.7); setId(data.id) }} onMouseLeave={() => {setOpacity(1); setId('')}} style={{opacity: `${data.id === id ? opacity : 1}`, transition: 'all .2s ease-in-out'}} />
        })}
      </Bar>
    </BarChart>
  );
};

export default SimpleBarChart;

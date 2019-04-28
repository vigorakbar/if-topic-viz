import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { total } from 'data';
import { PALETTE } from 'constants/color';

const totalData = total.sort((a,b) => {
  if (a.value > b.value) return 1;
  if (a.value < b.value) return -1;
  return 0;
})

const SimpleBarChart = () => (
  <BarChart
    width={800}
    height={400}
    data={total}
    margin={{top: 5, right: 30, left: 20, bottom: 5}}
    layout="vertical"
  >
    {/* <CartesianGrid strokeDasharray="3 3"/> */}
    <XAxis type="number" domain={[0, 700]}/>
    <YAxis dataKey="name" type="category" width={200}/>
    <Tooltip/>
    <Bar dataKey="value" fill="#8884d8">
      {totalData.map((data) => {
        return <Cell fill={PALETTE[data.id]} key={data.id} />
      })}
    </Bar>
  </BarChart>
);

export default SimpleBarChart;

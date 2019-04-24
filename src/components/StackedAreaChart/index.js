import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { main } from 'data';
import { PALETTE } from 'constants/color';

const TYPE = "linear";

const StackedAreaChart = () => (
  <AreaChart
    data={main}
    width={1200}
    height={620}
    margin={{top: 50, right: 50, left: 30, bottom: 0}}
  >
    {/* <CartesianGrid strokeDasharray="3 3"/> */}
    <XAxis dataKey="name"/>
    <YAxis/>
    <Tooltip/>
    <Legend verticalAlign="top" height={120} iconType="rect" iconSize={20}/>
    <Area
      stackId="1"
      type={TYPE}
      dataKey="cs"
      name="Computational Science"
      stroke={PALETTE.cs}
      fill={PALETTE.cs}
    />
    <Area
      stackId="1"
      type={TYPE}
      dataKey="gv"
      name="Graphics and Visualization"
      stroke={PALETTE.gv}
      fill={PALETTE.gv}
    />
    <Area
      stackId="1"
      type={TYPE}
      dataKey="hci"
      name="Human Computer Interaction"
      stroke={PALETTE.hci}
      fill={PALETTE.hci}
    />
    <Area
      stackId="1"
      type={TYPE}
      dataKey="ias"
      name="Information Assurance and Security"
      stroke={PALETTE.ias}
      fill={PALETTE.ias}
    />
    <Area
      stackId="1"
      type={TYPE}
      dataKey="im"
      name="Information Management"
      stroke={PALETTE.im}
      fill={PALETTE.im}
    />
    <Area
      stackId="1"
      type={TYPE}
      dataKey="is"
      name="Intelligent System"
      stroke={PALETTE.is}
      fill={PALETTE.is}
    />
    <Area
      stackId="1"
      type={TYPE}
      dataKey="nc"
      name="Networking and Communication"
      stroke={PALETTE.nc}
      fill={PALETTE.nc}
    />
    <Area
      stackId="1"
      type={TYPE}
      dataKey="pbd"
      name="Platform-Based Development"
      stroke={PALETTE.pbd}
      fill={PALETTE.pbd}
    />
    <Area
      stackId="1"
      type={TYPE}
      dataKey="pdc"
      name="Parallel and Distributed Computing"
      stroke={PALETTE.pdc}
      fill={PALETTE.pdc}
    />
    <Area
      stackId="1"
      type={TYPE}
      dataKey="sw"
      name="Software Engineering"
      stroke={PALETTE.sw}
      fill={PALETTE.sw}
    />
  </AreaChart>
);

export default StackedAreaChart;

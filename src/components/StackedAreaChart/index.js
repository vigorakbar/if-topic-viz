import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { main } from 'data';
import { PALETTE } from 'constants/color';

const TYPE = "linear";

const StackedAreaChart = () => {
  const [filter, setFilter] = useState(['cs', 'gv', 'hci', 'ias', 'im', 'is', 'nc', 'pbd', 'pdc', 'sw'])
  console.log(filter)
  return (
    <AreaChart
      data={main}
      width={1200}
      height={620}
      margin={{top: 50, right: 50, left: 30, bottom: 0}}
    >
      {/* <CartesianGrid strokeDasharray="3 3"/> */}
      <XAxis dataKey="name"/>
      <Tooltip/>
      <Legend verticalAlign="top" height={120} content={() => renderLegend({filter, setFilter})}/>
      { filter.includes("cs") &&
        <Area
          stackId="1"
          type={TYPE}
          dataKey="cs"
          name="Computational Science"
          stroke={PALETTE.cs}
          fill={PALETTE.cs}
          onClick={() => onSetFilter("cs", filter, setFilter)}
        />
      }
      { filter.includes("gv") &&
        <Area
          stackId="1"
          type={TYPE}
          dataKey="gv"
          name="Graphics and Visualization"
          stroke={PALETTE.gv}
          fill={PALETTE.gv}
          onClick={() => onSetFilter("gv", filter, setFilter)}
        />
      }
      { filter.includes("hci") &&
        <Area
          stackId="1"
          type={TYPE}
          dataKey="hci"
          name="Human Computer Interaction"
          stroke={PALETTE.hci}
          fill={PALETTE.hci}
          onClick={() => onSetFilter("hci", filter, setFilter)}
        />
      }
      { filter.includes("ias") &&
        <Area
          stackId="1"
          type={TYPE}
          dataKey="ias"
          name="Information Assurance and Security"
          stroke={PALETTE.ias}
          fill={PALETTE.ias}
          onClick={() => onSetFilter("ias", filter, setFilter)}
        />
      }
      { filter.includes("im") &&
        <Area
          stackId="1"
          type={TYPE}
          dataKey="im"
          name="Information Management"
          stroke={PALETTE.im}
          fill={PALETTE.im}
          onClick={() => onSetFilter("im", filter, setFilter)}
        />
      }
      { filter.includes("is") &&
        <Area
          stackId="1"
          type={TYPE}
          dataKey="is"
          name="Intelligent System"
          stroke={PALETTE.is}
          fill={PALETTE.is}
          onClick={() => onSetFilter("is", filter, setFilter)}
        />
      }
      { filter.includes("nc") &&
        <Area
          stackId="1"
          type={TYPE}
          dataKey="nc"
          name="Networking and Communication"
          stroke={PALETTE.nc}
          fill={PALETTE.nc}
          onClick={() => onSetFilter("nc", filter, setFilter)}
        />
      }
      { filter.includes("pbd") &&
        <Area
          stackId="1"
          type={TYPE}
          dataKey="pbd"
          name="Platform-Based Development"
          stroke={PALETTE.pbd}
          fill={PALETTE.pbd}
          onClick={() => onSetFilter("pbd", filter, setFilter)}
        />
      }
      { filter.includes("pdc") &&
        <Area
          stackId="1"
          type={TYPE}
          dataKey="pdc"
          name="Parallel and Distributed Computing"
          stroke={PALETTE.pdc}
          fill={PALETTE.pdc}
          onClick={() => onSetFilter("pdc", filter, setFilter)}
        />
      }
      { filter.includes("sw") &&
        <Area
          stackId="1"
          type={TYPE}
          dataKey="sw"
          name="Software Engineering"
          stroke={PALETTE.sw}
          fill={PALETTE.sw}
          onClick={() => onSetFilter("sw", filter, setFilter)}
        />
      }
    </AreaChart>
  );
}

const completeLegend = ['cs', 'gv', 'hci', 'ias', 'im', 'is', 'nc', 'pbd', 'pdc', 'sw'];

const onSetFilter = (id, filter, setFilter) => {
  if (filter.length === 10) {
    filter = [id];
  } else if (filter.includes(id)) {
    filter = filter.filter(item => item !== id);
  } else {
    filter = filter.concat([id]);
  }

  if (filter.length === 0) filter = completeLegend

  setFilter(filter);
}

const renderLegend = (props) => {
  const { setFilter } = props;
  let { filter } = props;

  return (
    <ul className="recharts-default-legend" style={{ padding: '0px', margin: '0px', textAlign: 'center' }}>
      {
        legend.map((entry, index) => (
          <li
            key={`item-${index}`}
            className={`recharts-legend-item legend-item-${index}`}
            style={{ display: 'inline-block', marginRight: '15px', marginBottom: '5px', cursor: 'pointer' }}
            onClick={() => onSetFilter(entry.dataKey, filter, setFilter)}
          >
            <svg className="recharts-surface" width="20" height="20" viewBox="0 0 32 32" version="1.1" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px'}}>
              <path stroke={entry.color} strokeWidth="3px" fill={filter.includes(entry.dataKey) ? entry.color : 'none'} d="M0,4h32v24h-32z" className="recharts-legend-icon"></path>
            </svg>
            <span className="recharts-legend-item-text">
              {entry.value}
            </span>
          </li>
        ))
      }
    </ul>
  );
}

const legend = [
  {
    dataKey: "cs",
    color: PALETTE.cs,
    value: "Computational Science"
  },
  {
    dataKey: "gv",
    color: PALETTE.gv,
    value: "Graphics and Visualization"
  },
  {
    dataKey: "hci",
    color: PALETTE.hci,
    value: "Human Computer Interaction"
  },
  {
    dataKey: "ias",
    color: PALETTE.ias,
    value: "Information Assurance and Security"
  },
  {
    dataKey: "im",
    color: PALETTE.im,
    value: "Information Management"
  },
  {
    dataKey: "is",
    color: PALETTE.is,
    value: "Intelligent System"
  },
  {
    dataKey: "nc",
    color: PALETTE.nc,
    value: "Networking and Communication"
  },
  {
    dataKey: "pbd",
    color: PALETTE.pbd,
    value: "Platform-Based Development"
  },
  {
    dataKey: "pdc",
    color: PALETTE.pdc,
    value: "Parallel and Distributed Computing"
  },
  {
    dataKey: "sw",
    color: PALETTE.sw,
    value: "Software Engineering"
  },
];

export default StackedAreaChart;

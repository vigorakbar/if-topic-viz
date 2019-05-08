import React, { useState } from 'react';
import { AreaChart, Area, XAxis, Tooltip, Legend } from 'recharts';
import { main } from 'data';
import { PALETTE } from 'constants/color';
import Styled from 'styled-components';
import LegendBullet from './LegendBullet';

const TYPE = "linear";
const WIDTH = 1100;
const HEIGHT = 480;

var isFirefox = typeof InstallTrigger !== 'undefined';

const StyledLegend = Styled.ul`
  position: absolute;
  left: ${WIDTH-40}px;
  min-width: 242px;
  top: -90px;
  padding: 0px;
  margin: 0px;
  font-weight: 600;
`;

const StackedAreaChart = () => {
  const [filter, setFilter] = useState(['cs', 'gv', 'hci', 'ias', 'im', 'is', 'nc', 'pbd', 'pdc', 'sw'])

  return (
    <AreaChart
      data={main}
      width={WIDTH}
      height={HEIGHT}
      margin={{top: 50, right: 50, left: 30, bottom: 0}}
    >
      <XAxis dataKey="name" tick={{stroke:"rgb(141,102,22)", strokeWidth: 0.7}} />
      <Tooltip itemSorter={() => isFirefox ? 1 : -1}/>
      <Legend verticalAlign="middle" height={120} content={() => renderLegend({filter, setFilter})}/>
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
    <StyledLegend className="recharts-default-legend">
      {
        legend.map((entry, index) => (
          <li
            key={`item-${index}`}
            className={`recharts-legend-item legend-item-${index}`}
            style={{ display: 'inline-block', marginRight: '15px', marginBottom: '10px', cursor: 'pointer' }}
            onClick={() => onSetFilter(entry.dataKey, filter, setFilter)}
          >
            <div style={{display: 'flex'}}>
              <div className="legend-wrapper">
                <LegendBullet entry={entry} filter={filter}/>
              </div>
              <div className="recharts-legend-item-text" style={{marginLeft: '5px'}}>
                <i>{entry.value}</i>
              </div>
            </div>
          </li>
        ))
      }
    </StyledLegend>
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

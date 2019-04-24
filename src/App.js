import React from 'react';
import StackedAreaChart from 'components/StackedAreaChart';
import BarChart from 'components/BarChart';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <StackedAreaChart />
        <BarChart />
      </div>
    );
  }
}

export default App;

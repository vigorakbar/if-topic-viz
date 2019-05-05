import React from 'react';
import StackedAreaChart from 'components/StackedAreaChart';
import BarChart from 'components/BarChart';
import Title from 'components/Title';
import Subtitle from 'components/Subtitle';
import DetailText from 'components/DetailText';
import Styled from 'styled-components';

const Container = Styled.div`

`;

const SubContent = Styled.div`

`;

class App extends React.PureComponent {
  render() {
    return (
      <Container>
        <Title />
        <StackedAreaChart />
        <SubContent>
          <div>
            <Subtitle />
            <BarChart />
          </div>
          <DetailText />
        </SubContent>
      </Container>
    );
  }
}

export default App;

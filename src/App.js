import React from 'react';
import StackedAreaChart from 'components/StackedAreaChart';
import BarChart from 'components/BarChart';
import Title from 'components/Title';
import Subtitle from 'components/Subtitle';
import DetailText from 'components/DetailText';
import Styled from 'styled-components';

const Container = Styled.div`
  margin: 30px 10px;
`;

const SubContent = Styled.div`
  margin-top: 32px;
  display: flex;
`;

const SubContentWrapper = Styled.div`
  
`;

class App extends React.PureComponent {
  render() {
    return (
      <Container>
        <Title />
        <StackedAreaChart />
        <SubContent>
          <SubContentWrapper>
            <Subtitle />
            <BarChart />
          </SubContentWrapper>
          <DetailText />
        </SubContent>
      </Container>
    );
  }
}

export default App;

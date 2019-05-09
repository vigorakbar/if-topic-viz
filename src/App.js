import React, {Suspense} from 'react';
import Title from 'components/Title';
import Subtitle from 'components/Subtitle';
import DetailText from 'components/DetailText';
import Styled from 'styled-components';
const StackedAreaChart = React.lazy(() => import('components/StackedAreaChart'));
const BarChart = React.lazy(() => import('components/BarChart'));

const Container = Styled.div`
  margin: 30px 10px;
`;

const SubContent = Styled.div`
  margin-top: 32px;
  display: flex;
`;

class App extends React.PureComponent {
  render() {
    return (
      <Container>
        <Title />
        <Suspense fallback={<div style={{width:1100, height: 480}}/>}>
          <StackedAreaChart />
        </Suspense>
        <SubContent>
          <div>
            <Subtitle />
            <Suspense fallback={<div style={{width:800, height: 420}}/>}>
              <BarChart />
            </Suspense>
          </div>
          <DetailText />
        </SubContent>
      </Container>
    );
  }
}

export default App;

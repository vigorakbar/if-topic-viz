import React, {Suspense} from 'react';
import Title from 'components/Title';
import Subtitle from 'components/Subtitle';
import DetailText from 'components/DetailText';
import Styled from 'styled-components';
import Rolling from 'asset/Rolling.gif'
const StackedAreaChart = React.lazy(() => import('components/StackedAreaChart'));
const BarChart = React.lazy(() => import('components/BarChart'));

const Container = Styled.div`
  margin: 30px 10px;
`;

const SubContent = Styled.div`
  margin-top: 32px;
  display: flex;
`;

const Loading = ({width, height}) => (
  <div style={{width, height, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <img src={Rolling} alt="Loading..." style={{width: '40px', height: '40px'}}/>
  </div>
);

class App extends React.PureComponent {
  render() {
    return (
      <Container>
        <Title />
        <Suspense fallback={<Loading width={1280} height={480} />}>
          <StackedAreaChart />
        </Suspense>
        <SubContent>
          <div>
            <Subtitle />
            <Suspense fallback={<Loading width={800} height={420} />}>
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

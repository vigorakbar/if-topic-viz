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
  label {
    min-width: 73px;
  }

  .btn {
    background: #deb639;
    color: black;
  }

  .btn.active {
    background: #B07E1B;
  }
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
  state = {
    chart: 1
  }

  onClickButton = (chart) => {
    this.setState({chart})
  }

  render() {
    const {chart} = this.state;
    return (
      <Container>
        <Title chart={chart}/>
        <div className="btn-group btn-group-toggle" data-toggle="buttons" style={{marginLeft: 40}}>
          <label className="btn active" onClick={() => this.onClickButton(1)}>
            <input type="radio" name="options" id="option1" autocomplete="off" checked/> Tren
          </label>
          <label className="btn" onClick={() => this.onClickButton(2)}>
            <input type="radio" name="options" id="option2" autocomplete="off"/> Jumlah
          </label>
        </div>
        <div style={{width: 1280, height: 455, display: 'flex', alignItems: 'flex-end', justifyContent: chart===2?'center':'left'}}>
          {chart === 1 ? 
            <Suspense fallback={<Loading width={1280} height={480} />}>
              <StackedAreaChart />
            </Suspense>:
            <Suspense fallback={<Loading width={800} height={420} />}>
              <BarChart />
            </Suspense>
          }
        </div>
      </Container>
    );
  }
}

export default App;

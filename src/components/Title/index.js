import React from 'react';
import Styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Wrapper = Styled.h2`
  text-align: center;
  min-width: 1280px;
  min-height: 81px;
  font-size: 24px;
  font-weight: 600;
`;

const Title = ({chart}) => (
  <Wrapper>
    <div>
      {chart === 1 ? 
        <Tren />:
        <Jumlah />
      }
    </div>
  </Wrapper>
)

const Tren = () => (
  <Fade duration={500}>
    <div>
      TREN AREA KEILMUAN UTAMA <br />
      TUGAS AKHIR MAHASISWA INFORMATIKA ITB <br />
      1998 - 2018
    </div>
  </Fade>
);

const Jumlah = () => (
  <Fade duration={500}>
    <div>
      PERBANDINGAN JUMLAH AREA KEILMUAN UTAMA <br />
      TUGAS AKHIR MAHASISWA INFORMATIKA ITB <br/>
      1998 - 2018
    </div>
  </Fade>
);

export default Title;

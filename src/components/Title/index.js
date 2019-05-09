import React from 'react';
import Styled from 'styled-components';

const Wrapper = Styled.h2`
  text-align: center;
  min-width: 1280px;
  min-height: 81px;
  font-size: 24px;
  font-weight: 600;
`;

const Title = ({chart}) => (
  <Wrapper>
    {chart === 1 ? 
    (<div>
      TREN AREA KEILMUAN UTAMA <br />
      TUGAS AKHIR MAHASISWA INFORMATIKA ITB <br />
      1998 - 2018
    </div>):
    (<div>
      PERBANDINGAN JUMLAH AREA KEILMUAN UTAMA <br />
      TUGAS AKHIR MAHASISWA INFORMATIKA ITB <br/>
      1998 - 2018
    </div>)
    }
  </Wrapper>
)

export default Title;

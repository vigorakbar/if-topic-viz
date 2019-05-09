import React from 'react';
import Styled from 'styled-components';

const Wrapper = Styled.div`
  font-weight: 600;
  margin-right: 30px;
  display: flex;
  align-items: center;
  min-width: 461px;

  ul {
    text-align: justify;
  }

  li {
    margin-bottom: 20px;
  }
`;

const DetailText = () => (
  <Wrapper>
    <ul>
      <li>Tren <i>Software Engineering</i> dan <i>Intelligent System</i> cenderung meningkat setiap tahunnya</li>
      <li>Area keilmuan yang trennya relatif naik secara signifikan dalam tiga tahun terakhir (2016-2018) adalah <i>Platform-Based Development</i>, yaitu sejumlah 5 TA pada 2016 dan naik hingga 15 TA pada 2018</li>
      <li>Sejak 2008, tren area keilmuan <i>Human Computer Interaction</i> mulai naik dari yang sebelumnya tidak ada pada tahun 1998-1999 dan 2001-2007</li>
      <li>Pada 20 tahun terakhir, jumlah area keilmuan yang mendominasi adalah <i>Software Engineering</i>, sedangkan yang paling sedikit adalah <i>Human Computer Interaction</i></li>
    </ul>
  </Wrapper>
);

export default DetailText;

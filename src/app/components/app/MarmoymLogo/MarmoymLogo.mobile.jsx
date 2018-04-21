import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { border } from '@styles/styles';
import Color from '@constants/Color';

const StyledMarmoymLogo = styled.div`
  width: 55px;
  display: flex;
  align-items: center;
  padding-left: 5px;
  
  span {
    font-size: 16px;
    font-weight: bold;
    color: ${Color.BLACK5};
    cursor: pointer;
  }
`;

const MarmoymLogo = (props) => {
  return (
    <StyledMarmoymLogo>
      <span onClick={props.handleClickMarmoymLogo}>말모음</span>
    </StyledMarmoymLogo>
  );
};

export default MarmoymLogo;

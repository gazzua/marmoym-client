import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { withProps } from '@src/styles/styleUtils';
import { Colors, styles } from '@styles/index';

const StyledMarmoymLogo = styled.div`
  width: 55px;
  display: flex;
  align-items: center;
  padding-left: 5px;
  span {
    font-size: 16px;
    font-weight: bold;
    color: ${Colors.BLACK5};
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

import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { withProps } from 'styles/utils';
import { w320 } from 'styles/media'; 

const MarmoymLogo = styled.div`
  ${w320(`
    display: flex;
    align-items: center;
  `)}
`;

export default () => {
  return (
    <MarmoymLogo>
      <span>말모음</span>
    </MarmoymLogo>
  )
};

import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { withProps } from '../../utils/styleUtils';

const MarmoymLogo = styled.div`
  @media (min-width: 320px) and (max-width: 479px) {
    display: flex;
    align-items: center;
  }
`;

export default () => {
  return (
    <MarmoymLogo>
      <span>말모음</span>
    </MarmoymLogo>
  )
};

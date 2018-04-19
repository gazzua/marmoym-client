import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import globalStyle from '@src/styles/global';
import { media, styles } from '@styles/index';

const StyledRoot = styled.div`
  position: absolute;
  min-height: 100%;
  ${media.w320`
    min-width: 320px;
    width: 100%;
  `};

  ${media.w480`
    opacity: 0.5;
  `}
`;

/**
 * ...
 */
globalStyle();

const Root = (props) => {
  return (
    <StyledRoot id={props.id}>
      {props.children}
    </StyledRoot>
  );
};

export default (Root);

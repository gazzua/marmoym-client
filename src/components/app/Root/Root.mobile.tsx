import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { styles, media } from '@styles/index';
import { Div } from '@styles/elems';
import { withProps, resolveNames } from '@src/styles/styleUtils';

const StyledRoot = styled.div`
  ${media.w320(`
    min-width: 320px;
    height: 100%;
    .${'inner'} {
      width: 320px;
      margin: 0 auto;
      min-height: 100%;
      ${styles.border('coral')}
    }`)
  }
`;

const Root = (props) => {
  return (
    <StyledRoot>
      <div className={'inner'}>
        {props.children}
      </div>
    </StyledRoot>
  );
};

export default (Root);
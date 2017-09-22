import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { border } from '@src/styles/debug';
import { Div } from '@src/styles/elem';
import { withProps, resolveNames } from '@src/styles/utils';
import { w320 } from '@src/styles/media';

const styles: any = resolveNames(['inner']);

const StyledRoot = styled.div`
  ${w320(`
    min-width: 320px;
    height: 100%;
    color: blue;
    .${styles.inner} {
      width: 320px;
      margin: 0 auto;
      min-height: 100%;
      ${border('gray')}
    }`)
  }
`;

const Root = (props) => {
  return (
    <StyledRoot>
      <div className={styles.inner}>
        {props.children}
      </div>
    </StyledRoot>
  );
};

export default Root;
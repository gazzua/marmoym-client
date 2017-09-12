import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { border } from '../../styles/debug';
import { Div } from '../../styles/elem';
import { withProps, resolveNames } from '../../styles/utils';
import { w320 } from '../../styles/media';

const styles: any = resolveNames(['inner']);

const StyledApp = styled.div`
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

const App = (props) => {
  return (
    <StyledApp>
      <div className={styles.inner}>
        {props.children}
      </div>
    </StyledApp>
  );
};

export default App;
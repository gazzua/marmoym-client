import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { border } from '../../styles/debug';
import { withProps } from '../../utils/styleUtils';

export namespace App {
  export interface Props {
    innerClassName: string;
  }
}

// TODO: @media needs to be parameterized
const App = withProps<App.Props>()(styled.div)`
  @media (max-width: 479px) {
    min-width: 320px;
    color: blue;
    height: 100%;
    .${props => props.innerClassName} {
      width: 320px;
      margin: 0 auto;
      min-height: 100%;
      
      ${border('gray')}
    }
  }
`;

export default App;
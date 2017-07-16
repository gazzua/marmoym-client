import styled, { StyledFunction } from 'styled-components';

import { border } from '../../styles/debug';
import { withProps } from '../../utils/styleUtils';

export namespace App {
  export interface Props {
    innerClassName: string;
  }
}

const App = withProps<App.Props>()(styled.div)`
  @media (min-width: 320px) and (max-width: 479px) {
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
import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { withProps } from '@src/styles/utils';
import { border } from '@src/styles/debug';
import MarmoymLogo from '@src/components/app/MarmoymLogo/MarmoymLogo';
import QueryDisplay from './QueryDisplay/QueryDisplay';
import { Masthead } from '@src/components/ComponentTypes'; 


const StyledMastheadBase = styled.div`
  height: 46px;
  display: flex;

  .rightButtonGroup {
    display: flex;
    margin-left: auto;

    button {  
      ${border('green')}
    }
  }
`;

const MastheadBase = (props) => (
  <StyledMastheadBase>
    <MarmoymLogo/>
    <QueryDisplay/>
    <div>
      {props.children}
    </div>
    <div className={'rightButtonGroup'}>
      <button>
        sch
      </button>
      <button onClick={props.handleClickAddTerm}>
        add
      </button>
      <button>
        hbg
      </button>
    </div>
  </StyledMastheadBase>
);

const MastheadOnAddTerm: React.SFC<Masthead.Props> = () => (
  <MastheadBase>
    add term
  </MastheadBase>
);

const MastheadDefault: React.SFC<Masthead.Props> = (props) => (
  <MastheadBase/>
);

const Masthead: React.SFC<Masthead.Props> = (props) => {
  let Component;
  switch(props.pathname) {
    case '/addTerm':
      Component = <MastheadOnAddTerm {...props}/>;
    break;
    default:
      Component = <MastheadDefault {...props}/>;
  }
  return Component;
}

export default Masthead;


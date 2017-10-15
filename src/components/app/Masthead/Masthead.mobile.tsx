import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { withProps } from '@src/styles/styleUtils';
import { border } from '@src/styles/debug';
import MarmoymLogo from '@src/components/app/MarmoymLogo/MarmoymLogo';
import QueryDisplay from './QueryDisplay/QueryDisplay';
import { Masthead } from '@src/components/ComponentTypes'; 
import { Div, P, Span, Button } from '@src/styles/elems';
import SearchIcon from '@src/components/icons/SearchIcon/SearchIcon';
import PencilIcon from '@src/components/icons/PencilIcon/PencilIcon';
import HamburgerIcon from '@src/components/icons/HamburgerIcon/HamburgerIcon';

const StyledMasthead = styled.div`
  height: 46px;
  display: flex;
  background-color: #F9F9F9;
`;

const RightButtonGroup = Div.extend`
  display: flex;
  margin-left: auto;
  button {
    width: 36px;
    i {
      cursor: pointer;
      font-size: 20px;
      &:active {
        transform: translate(1px, 1px);
      }  
    }
  }
`;

const Masthead = (props) => (
  <StyledMasthead>
    <MarmoymLogo
      handleClickMarmoymLogo={props.handleClickMarmoymLogo}/>
    <QueryDisplay
      handleKeyDown={props.handleKeyDown}/>
    <RightButtonGroup>
      <Button>
        <SearchIcon/>
      </Button>
      <Button onClick={props.handleClickAddTerm}>
        <PencilIcon/>
      </Button>
      <Button>
        <HamburgerIcon/>
      </Button>
    </RightButtonGroup>
  </StyledMasthead>
);

export default Masthead;


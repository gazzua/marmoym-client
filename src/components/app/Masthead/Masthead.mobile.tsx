import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { Colors, styles } from '@styles/index';
import MarmoymLogo from '@src/components/app/MarmoymLogo/MarmoymLogo';
import QueryDisplay from './QueryDisplay/QueryDisplay';
import { Masthead } from '@src/components/ComponentTypes'; 
import SearchIcon from '@src/components/icons/SearchIcon/SearchIcon';
import PencilIcon from '@src/components/icons/PencilIcon/PencilIcon';
import HamburgerIcon from '@src/components/icons/HamburgerIcon/HamburgerIcon';

const StyledMasthead = styled.div`
  height: 46px;
  display: flex;
  background-color: ${Colors.WHITE4};
`;

const RightButtonGroup = styled.div`
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
      <button>
        <SearchIcon/>
      </button>
      <button onClick={props.handleClickAddTerm}>
        <PencilIcon/>
      </button>
      <button>
        <HamburgerIcon/>
      </button>
    </RightButtonGroup>
  </StyledMasthead>
);

export default Masthead;


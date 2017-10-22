import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';
import { connect } from 'react-redux';

import { Colors } from '@styles/index';
import MastheadBase from '../MastheadBase/MastheadBase';
import MarmoymLogo from '@src/components/app/MarmoymLogo/MarmoymLogo';
import QueryDisplay from '../QueryDisplay/QueryDisplay';
import SearchIcon from '@src/components/icons/SearchIcon/SearchIcon';
import PencilIcon from '@src/components/icons/PencilIcon/PencilIcon';
import HamburgerIcon from '@src/components/icons/HamburgerIcon/HamburgerIcon';

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

const DefaultMasthead = (props) => {
  return (
    <MastheadBase>
      <MarmoymLogo
        handleClickMarmoymLogo={props.handleClickMarmoymLogo}/>
      <QueryDisplay
        searchRequested={props.searchRequested}
        handleKeyDown={props.handleKeyDown}/>
      <RightButtonGroup>
        <button onClick={props.handleClickSearchIcon}>
          <SearchIcon/>
        </button>
        <button onClick={props.handleClickAddTerm}>
          <PencilIcon/>
        </button>
        <button>
          <HamburgerIcon/>
        </button>
      </RightButtonGroup>      
    </MastheadBase>
  );
}

export default DefaultMasthead;
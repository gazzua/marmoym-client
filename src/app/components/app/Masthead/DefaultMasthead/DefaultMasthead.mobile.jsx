import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';
import { connect } from 'react-redux';

import { Colors } from '@styles/index';
import MastheadBase from '../MastheadBase/MastheadBase.mobile';
import MarmoymLogo from '@src/components/app/MarmoymLogo/MarmoymLogo.mobile';
import QueryDisplay from '../QueryDisplay/QueryDisplay.mobile';
import SearchIcon from '@src/components/icons/SearchIcon/SearchIcon.mobile';
import PencilIcon from '@src/components/icons/PencilIcon/PencilIcon.mobile';
import HamburgerIcon from '@src/components/icons/HamburgerIcon/HamburgerIcon.mobile';
// tslint:disable-next-line:max-line-length
import GlobalMenuModalContainer from '@containers/modals/GlobalMenuModalContainer/GlobalMenuModalContainer.mobile';

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

const renderGlobalMenuModal = (props) => {
  if (props.modalIsVisible) {
    return (
      <GlobalMenuModalContainer
        handleClickBackdrop={props.handleClickBackdrop}
        handleClickHamburgerIcon={props.handleClickHamburgerIcon}/>
    );
  } else {
    return null;
  }
};

const DefaultMasthead = (props) => {
  return (
    <MastheadBase>
      {renderGlobalMenuModal(props)}
      <MarmoymLogo
        handleClickMarmoymLogo={props.handleClickMarmoymLogo}/>
      <QueryDisplay
        searchRequested={props.searchRequested}
        handleKeyDown={props.handleKeyDown}/>
      <RightButtonGroup>
        <button>
          <SearchIcon onClick={props.handleClickSearchIcon}/>
        </button>
        <button>
          <PencilIcon onClick={props.handleClickPencilIcon}/>
        </button>
        <button>
          <HamburgerIcon onClick={props.handleClickHamburgerIcon}/>
        </button>
      </RightButtonGroup>
    </MastheadBase>
  );
};

export default DefaultMasthead;

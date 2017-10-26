import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { Colors, styles } from '@styles/index';
import { Masthead } from '@src/models/ComponentTypes'; 
import DefaultMasthead from './DefaultMasthead/DefaultMasthead';
import SearchMasthead from './SearchMasthead/SearchMasthead';

const Masthead = (props) => {
  const { displayName } = props;

  switch (displayName) {
    case 'SEARCH':
      return (
        <SearchMasthead
          query={props.query}
          handleChangeQuery={props.handleChangeQuery}
          handleClickLeftArrowIcon={props.handleClickLeftArrowIcon}
          handleKeyDown={props.handleKeyDown}/>
      );

    case '/':
    default: 
      return (
        <DefaultMasthead
          searchRequested={props.searchRequested}
          modalIsVisible={props.modalIsVisible}
          handleClickMarmoymLogo={props.handleClickMarmoymLogo}
          handleClickPencilIcon={props.handleClickPencilIcon}
          handleClickHamburgerIcon={props.handleClickHamburgerIcon}
          handleClickSearchIcon={props.handleClickSearchIcon}
          handleClickBackdrop={props.handleClickBackdrop}/>
      );
  }
};

export default Masthead;
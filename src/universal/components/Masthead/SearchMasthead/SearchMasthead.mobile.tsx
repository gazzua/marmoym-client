import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';
import { connect } from 'react-redux';

import { border } from '@universal/styles/styles';
import Color from '@universal/constants/Color';
import MastheadBase from '@universal/components/Masthead/MastheadBase/MastheadBase.mobile';
import SearchIcon from '@universal/components/icons/SearchIcon/SearchIcon.mobile';
import SearchInput from '@components/Masthead/SearchInput/SearchInput.mobile';
import FontAwesomeIcon from '@components/icons/FontAwesomeIcon/FontAwesomeIcon.mobile';

const RemoveIcon = (props) => {
  return props.query.length ? <FontAwesomeIcon icon={'fa-times'}/> : null;
};

const LeftArrowIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
`;

const StyledSearchMasthead = styled(MastheadBase)`
  padding: 0 10px;
  position: relative;

  div {
    margin-left: 7px;
  }

  .remove {
    margin-left: auto;
    font-size: 17px;
  }  
`;

const SearchMasthead = (props) => {
  return (
    <StyledSearchMasthead>
      <LeftArrowIcon
        icon={'arrow-left'}
        onClick={props.handleClickLeftArrow}/>
      <SearchInput
        query={props.query}
        handleChangeQuery={props.handleChangeQuery}
        handleKeyDown={props.handleKeyDown}/>
      <RemoveIcon query={props.query}/>
    </StyledSearchMasthead>
  );
};

export default SearchMasthead;

import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';
import { connect } from 'react-redux';

import { Colors, styleUtils } from '@styles/index';
import MastheadBase from '../MastheadBase/MastheadBase.mobile';
import SearchIcon from '@src/components/icons/SearchIcon/SearchIcon.mobile';
import SearchInput from '../SearchInput/SearchInput.mobile';
import FontAwesomeIcon from '@components/icons/FontAwesomeIcon/FontAwesomeIcon.mobile';

const RemoveIcon = (props) => {
  return props.query.length ? <FontAwesomeIcon icon={'fa-times'}/> : null;
};

const LeftArrowIcon = styleUtils.withProps()(styled(FontAwesomeIcon))`
  cursor: pointer;
`;

const ExtendedMastheadBase = styled(MastheadBase)`
  padding: 0 10px;
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
    <ExtendedMastheadBase>
      <LeftArrowIcon
        icon={'fa-arrow-left'}
        onClick={props.handleClickLeftArrowIcon}/>
      <SearchInput
        query={props.query}
        handleChangeQuery={props.handleChangeQuery}
        handleKeyDown={props.handleKeyDown}/>
      <RemoveIcon query={props.query}/>
    </ExtendedMastheadBase>
  );
};

export default SearchMasthead;

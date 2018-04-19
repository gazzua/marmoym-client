import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';
import { connect } from 'react-redux';

import { border } from '@styles/styles';
import Color from '@constants/Color';
import { selectLocale } from '@selectors/localeSelector';
import FontAwesomeIcon from '@components/icons/FontAwesomeIcon/FontAwesomeIcon.mobile';

const StyledSearchInput = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Input = styled.input`
  width: 250px;
  background-color: transparent;
  outline: none;
  border: none;
  color: ${Color.BLACK5};
`;

const QueryDisplay = (props) => {
  return (
    <StyledSearchInput>
      <Input
        value={props.query}
        onChange={props.handleChangeQuery}
        onKeyDown={props.handleKeyDown}
        placeholder={props.locale['queryDisplay.placeholder']}/>
    </StyledSearchInput>
  );
};

const mapStateToProps = (state) => ({
  locale: selectLocale(state),
});

export default connect(mapStateToProps)(QueryDisplay);

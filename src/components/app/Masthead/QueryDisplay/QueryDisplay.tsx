import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';
import { connect } from 'react-redux';

import { Div, Span, Input } from '@src/styles/elems';
import { withProps } from '@src/styles/styleUtils';
import { selectLocale } from '@selectors/localeSelector';
import { black2 } from '@styles/colors';

const StyledQueryDisplay = styled.div`
  margin-left: 5px;
  display: flex;
  align-items: center;
`;

const QueryInput = Input.extend`
  width: 150px;
  background-color: transparent;
  outline: none;
  border: none;
  color: ${black2}
`;

const QueryDisplay = (props) => {
  console.log(123, props.locale);
  return (
    <StyledQueryDisplay>
      <QueryInput
        onKeyDown={props.handleKeyDown}
        placeholder={props.locale['queryDisplay.placeholder']}/>
    </StyledQueryDisplay>
  )
};

const mapStateToProps = (state) => ({
  locale: selectLocale(state) 
});

export default connect(mapStateToProps)(QueryDisplay);
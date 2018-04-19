import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';
import { connect } from 'react-redux';

import { border } from '@styles/styles';
import Color from '@constants/Color';
import { withProps } from '@src/styles/styleUtils';
import { selectLocale } from '@selectors/localeSelector';

const StyledQueryDisplay = styled.div`
  margin-left: 5px;
  display: flex;
  align-items: center;
`;

const QueryInput = styled.input`
  width: 150px;
  background-color: transparent;
  outline: none;
  border: none;
  color: ${Color.BLACK5};
`;

const QueryDisplay = (props) => {
  return (
    <StyledQueryDisplay>
      <span>
        {props.searchRequested}
      </span>
    </StyledQueryDisplay>
  );
};

const mapStateToProps = (state) => ({
  locale: selectLocale(state),
});

export default connect(mapStateToProps)(QueryDisplay);

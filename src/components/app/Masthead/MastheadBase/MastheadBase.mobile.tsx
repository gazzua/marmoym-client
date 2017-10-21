import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';
import { connect } from 'react-redux';

import { Colors } from '@styles/index';

const StyledMastheadBase = styled.div`
  padding: 0 3px;
  height: 46px;
  display: flex;
  align-items: center;gpba
  background-color: ${Colors.WHITE4};

  i {
    font-size: 20px;
  }
`;

const MastheadBase = (props) => {
  return (
    <StyledMastheadBase className={props.className}>
      {props.children}
    </StyledMastheadBase>
  )
}

export default MastheadBase;
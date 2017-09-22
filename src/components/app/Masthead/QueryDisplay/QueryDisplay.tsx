import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

const StyledQueryDisplay = styled.div`
  margin-left: 15px;
  display: flex;
  align-items: center;
`;

const QueryDisplay = (props) => (
  <StyledQueryDisplay>
    <span>query</span>
  </StyledQueryDisplay>
);

export default QueryDisplay;
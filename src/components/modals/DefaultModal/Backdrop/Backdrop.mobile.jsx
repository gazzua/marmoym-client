import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { resolveNames, withProps } from '@src/styles/styleUtils';

const StyledBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: black;
  opacity: 0.3;
`;

const Backdrop = (props) => {
  return (
    <StyledBackdrop
      onClick={props.handleClickBackdrop}/>
  );
};

export default Backdrop;

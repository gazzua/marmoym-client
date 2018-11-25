import * as React from 'react';
import styled from 'styled-components';

const StyledBackdrop = styled.div`
  background-color: black;
  bottom: 0;
  height: 100%;
  left: 0;
  opacity: 0.3;
  position: absolute;
  top: 0;
  width: 100%;
`;

 const Backdrop = (props) => {
  return (
    <StyledBackdrop
      onClick={props.handleClickBackdrop}
    />
  );
};
export default Backdrop;

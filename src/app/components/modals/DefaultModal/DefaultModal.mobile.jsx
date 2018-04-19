import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled, { StyledFunction } from 'styled-components';

import Backdrop from './Backdrop/Backdrop.mobile';

const StyledContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const DefaultModal = (props) => {
  return (
    <div>
      <Backdrop
        handleClickBackdrop={props.handleClickBackdrop}/>
      {props.children}
    </div>
  );
};

export default DefaultModal;

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';

import Backdrop from '@components/modals/Backdrop/Backdrop.mobile';

const StyledContent = styled.div`
  left: 50%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const DefaultModal = (props) => {
  return !!props.show && (
    <div>
      <Backdrop
        handleClickBackdrop={props.handleClickBackdrop}
      />
      {props.children}
    </div>
  );
};

export default DefaultModal;

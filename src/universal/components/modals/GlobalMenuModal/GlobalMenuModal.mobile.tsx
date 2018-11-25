import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled, { StyledFunction } from 'styled-components';

import Color from '@universal/constants/Color';

const StyledGlobalMenuModal = styled.div`
  background-color: ${Color.WHITE2};
  left: 50%;
  padding: 5px 3px;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 180px;
`;

const StyledEntry = styled.p`
  align-items: center;
  display: flex;
  height: 28px;
  justify-content: center;
  
  span {
    cursor: pointer;
  }
`;

const Entry: React.SFC<any> = (props) => {
  return (
    <StyledEntry>
      <span onClick={props.handleClick}>
        {props.children}
      </span>
    </StyledEntry>
  );
};

const GlobalMenuModal: React.SFC<any> = (props) => {
  return !!props.show && (
    <StyledGlobalMenuModal>
      <Entry handleClick={props.handleClickSignIn}>로그인</Entry>
      <Entry>내 계정</Entry>
      <Entry>사용자 의견</Entry>
      <Entry>데스크톱</Entry>
      <Entry handleClick={props.handleClickBackdrop}>취소</Entry>
    </StyledGlobalMenuModal>
  );
};

export default GlobalMenuModal;

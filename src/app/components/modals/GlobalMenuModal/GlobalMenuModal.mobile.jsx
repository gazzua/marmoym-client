import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled, { StyledFunction } from 'styled-components';

import { border } from '@styles/styles';
import Color from '@constants/Color';
import DefaultModalContainer from '@containers/modals/DefaultModalContainer/DefaultModalContainer.mobile';
import Locale from '@containers/LocaleContainer/LocaleContainer';

const StyledGlobalMenuModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${Color.WHITE2};
  padding: 5px 3px;
  width: 180px;
`;

const StyledEntry = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  ${border('black')}

  span {
    cursor: pointer;
  }
`;

const Entry = (props) => {
  return (
    <StyledEntry>
      <span onClick={props.handleClick}>
        {props.children}
      </span>
    </StyledEntry>
  );
};

const GlobalMenuModal = (props) => {
  return (
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

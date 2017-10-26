import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled, { StyledFunction } from 'styled-components';

import DefaultModalContainer from '@containers/modals/DefaultModalContainer/DefaultModalContainer';
import { Colors, styles } from '@styles/index';
import Locale from '@components/app/Locale/Locale';

const StyledGlobalMenuModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${Colors.WHITE2};
  width: 180px;
  padding: 5px 3px;
`;

const StyledEntry = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  ${styles.border('black')}

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
}

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
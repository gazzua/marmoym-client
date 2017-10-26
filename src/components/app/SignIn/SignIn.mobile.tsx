import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { styles, Colors } from '@styles/index';
import SignInContainer from '@src/containers/SignInContainer/SignInContainer';

const Email = styled.div``;
const Password = styled.div``;

const Input = styled.input``;

const Body = styled.div`
  margin-top: 3px;
  padding: 9px 12px;
  border: 1px solid #c5b9ce;
`;

const CheckBoxText = styled.div`
  margin-top: 3px;
  padding: 9px 12px;
  border: 1px solid #c5b9ce;
`;

const ThirdPartyLogin = styled.div`
  margin-top: 5px;
  padding: 9px 12px;
  border: 1px solid #c5b9ce;
`;

const StyledSignIn = styled.div`
`;

const SignIn = (props) => (
  <StyledSignIn>
    <Input
      value={props.username}
      onChange={props.handleChangeUsername}/>
      <Body>
        비밀번호 
      </Body>
      <Body>
        로그인
      </Body>
      <CheckBoxText>
        <div>
          아이디 저장
        </div>
        <div>
          로그인상태 유지
        </div>
      </CheckBoxText>
      <ThirdPartyLogin>
        구글 계정으로 로그인
      </ThirdPartyLogin>
      <ThirdPartyLogin>
        페이스북 계정으로 로그인
      </ThirdPartyLogin>
      <ThirdPartyLogin>
        카카오 계정으로 로그인
      </ThirdPartyLogin>
  </StyledSignIn>
);

export default SignIn;
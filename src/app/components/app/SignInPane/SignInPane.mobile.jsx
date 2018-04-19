import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { styles, Colors } from '@styles/styles';
// import Upper from './Upper/Upper';
// import Lower from './Lower/Lower';
import Locale from '@src/components/app/Locale/Locale';

const Email = styled.div``;
const Password = styled.div``;

const StyledSignInPane = styled.div`
  padding: 8px 0px;
  color: ${Colors.BLACK5};
  background-color: ${Colors.WHITE3};  
`;

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

const SignInPane = (props) => {
  return (
    <StyledSignInPane>
      <Body>
        아이디
      </Body>
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
      
    </StyledSignInPane>
  );
};

export default SignInPane;
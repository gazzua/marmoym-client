import * as React from 'react';
import styled from 'styled-components';

import Color from '@universal/constants/Color';

const Button = styled.button`
  align-items: center;
  background-color: ${Color.GRAY5};
  border: 1px solid #c5b9ce;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  height: 40px;
  justify-content: center;
  margin-top: 3px;
  width: 100%;
  &:hover {
    color: black;
    background-color: ${Color.BLACK6};
    box-shadow: inset 1px 1px 3px 0px rgba(0,0,0,0.75);
  }
`;

const Input = styled.input`
  border: 1px solid #c5b9ce;
  border-radius: 3px;
  height: 40px;
  padding: 5px;
  width: 100%;
  ::placeholder {
    color: ${Color.BLACK5};
    opacity: 1;
  }
`;

const InputGroup = styled.div`
  > input:last-child {
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;

const StyledSignUp = styled.div`
  background-color: white;
  padding: 10px;
`;

const SignUp: React.SFC<SignUpProps> = ({
  email,
  handleChangeEmail,
  handleChangePassword,
  handleChangePasswordDoubleCheck,
  handleChangeUsername,
  handleClick,
  password,
  password2,
  username,
}) => (
  <StyledSignUp>
    <InputGroup>
      <Input
        placeholder="이메일"
        onChange={handleChangeEmail}
        value={email}
      />
      <Input
        type="password"
        placeholder="비밀번호"
        onChange={handleChangePassword}
        value={password}
      />
      <Input
        type="password"
        placeholder="비밀번호 재확인"
        onChange={handleChangePasswordDoubleCheck}
        value={password2}
      />
      <Input
        placeholder="닉네임"
        onChange={handleChangeUsername}
        value={username}
      />
    </InputGroup>
    <Button onClick={handleClick}>
      회원가입
    </Button>
  </StyledSignUp>
);

export default SignUp;

interface SignUpProps {
  email: string,
  handleChangeEmail: any,
  handleChangePassword: any,
  handleChangePasswordDoubleCheck: any,
  handleChangeUsername: any,
  handleClick: any,
  password: string,
  password2: string,
  username: string,
}

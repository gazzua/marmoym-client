import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { styles, Colors } from '@styles/index';

const StyledSignUp = styled.div`
background-color: white;
padding: 10px;
`;

const Input = styled.input`
width: 100%;
height: 40px;
padding: 5px;
border: 1px solid #c5b9ce;
border-radius: 3px;

::placeholder {
  color: ${Colors.BLACK5};
  opacity: 1;
}
`;

const InputGroup = styled.div`
> input:last-child {
  margin-top: 10px;
  margin-bottom: 10px;
}
`;

const Button = styled.button`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
height: 40px;
margin-top: 3px;
border: 1px solid #c5b9ce;
border-radius: 5px;
background-color: ${Colors.GRAY5};
cursor: pointer;

&:hover {
  color: black;
  background-color: ${Colors.BLACK6};
  box-shadow: inset 1px 1px 3px 0px rgba(0,0,0,0.75);
}
`;

const SignUp = (props) => (
  <StyledSignUp>
    <InputGroup>
      <Input placeholder="이메일"
        value={props.email}
        onChange={props.handleChangeEmail}/>
      <Input type="password" placeholder="비밀번호"
        value={props.password}
        onChange={props.handleChangePassword}/>
      <Input type="password" placeholder="비밀번호 재확인"
        value={props.passwordDoubleCheck}
        onChange={props.handleChangePasswordDoubleCheck}/>
      <Input placeholder="닉네임"
        value={props.username}
        onChange={props.handleChangeUsername}/>
    </InputGroup>
    <Button onClick={props.handleClick}>
      회원가입
    </Button>
  </StyledSignUp>
);

export default SignUp;
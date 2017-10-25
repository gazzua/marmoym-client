import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { styles } from '@styles/index';
import SignInContainer from '@src/containers/SignInContainer/SignInContainer';
import SignInPane from '@src/components/app/SignInPane/SignInPane';

const renderSignIn = (signin) => {
  return (
    <SignInPane
    />
  );
}

const StyledSignIn = styled.div`
`;

const SignIn = (props) => (
  <StyledSignIn>
    {renderSignIn(props.signin)}
  </StyledSignIn>
);

export default SignIn;
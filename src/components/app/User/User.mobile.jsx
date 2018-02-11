import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { styles, Colors } from '@styles/index';

const StyledUser = styled.div`
  background-color: white;
  padding: 10px;
`;

const User = (props) => (
  // todo show current user name
  <StyledUser>
     username
  </StyledUser>
);

export default User;

import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { styles } from '@styles/index';
import { withProps } from '@src/styles/styleUtils';

const StyledPage = styled.div`
  ${styles.border('blue')}
`;

const Page = (props) => {
  const Content = props.content;
  return props.content ?
    <StyledPage>
      <Content/>
    </StyledPage>
    : null;
};

export default Page;

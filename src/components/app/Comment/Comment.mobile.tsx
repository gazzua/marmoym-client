import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { resolveNames, withProps } from '@src/styles/styleUtils';

const Label = styled.div``;
const Usage = styled.div``;
const Pos = styled.div``;
const Media = styled.div``;

const StyledComment = styled.div`
  margin-top: 15px;
`;

const Comment: React.SFC = (props) => {
  return (
    <StyledComment>
      Comment
    </StyledComment>
  );
};

export default Comment;
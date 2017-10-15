import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { resolveNames, withProps } from '@src/styles/styleUtils';
import { Div, P, Span } from '@src/styles/elems';
import { border } from '@src/styles/debug';

const Label = Div.extend``;
const Usage = Div.extend``;
const Pos = Div.extend``;
const Media = Div.extend``;

const StyledComment = Div.extend`
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
import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { styles } from '@styles/index';
import DefinitionPane from '@src/components/app/DefinitionPane/DefinitionPane';
import Comment from '@src/components/app/Comment/Comment';

const renderComments = (comments) => {
  if (!comments) {
    return null;
  }

  return comments.map((definition, i) => (
    <Comment/>
  ));
}

const StyledCommentList = styled.div`
  ${styles.border('black')}
`;

const CommentList = (props) => (
  <StyledCommentList>
    {renderComments(props.comments)}
  </StyledCommentList>
);

export default CommentList;
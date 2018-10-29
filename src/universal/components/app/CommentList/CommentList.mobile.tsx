import * as React from 'react';
import styled from 'styled-components';

import { border } from '@universal/styles/styles';
import { calculateTime } from '@universal/utils/mathUtils';
import Color from '@universal/constants/Color';
import Facon from '@components/common/Facon/Facon.mobile';
import Vote from '@components/app/Vote/Vote.mobile';

const StyledCommentList = styled.div`
  padding: 4px 7px;
`;

const StyledComment = styled.div`
  font-size: 13px;
  padding: 5px 0;
`;

const Upper = styled.div`
  color: ${Color.GRAY1};
  margin-bottom: 2px;
`;

const Content = styled.div`
  margin-bottom: 4px;
`;

const Lower = styled.div`
  display: flex;
`;

const Comment = ({
  handleClickReply,
  comment,
  showReplyForm,
}) => {
  return (
    <StyledComment>
      <Upper>
        <span>{comment.user.username}</span>
        <span>{calculateTime(comment.created_at)}</span>
      </Upper>
      <Content>{comment.content}</Content>
      <Lower>
        {/* <Vote
          downVote={comment.vote.downVoteCount}
          upVote={comment.vote.upVoteCount}
          style={{ marginLeft: 'auto' }}/> */}
      </Lower>
    </StyledComment>
  );
};

const CommentList = ({
  comments = [],
  handleClickReply,
  showReplyForm,
}) => {
  return (
    <StyledCommentList>
      {comments.map((c, idx) => {
        return (
          <Comment
            comment={c}
            handleClickReply={handleClickReply}
            key={c.id}
            showReplyForm={showReplyForm}/>
        );
      })}
    </StyledCommentList>
  );
};

export default CommentList;

import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import DownvoteIcon from '@src/components/icons/Downvote/Downvote.mobile';
import UpvoteIcon from '@src/components/icons/Upvote/Upvote.mobile';
import _SeparatorIcon from '@src/components/icons/SeparatorIcon/SeparatorIcon.mobile';

const StyledVote = styled.div``;

const Upvote = styled.span``;

const Downvote = styled.span``;

const VoteCount = styled.span`
  margin: 0 5px;
`;

const UpvoteCount = styled(VoteCount)``;

const DownvoteCount = styled(VoteCount)``;

const SeparatorIcon = styled(_SeparatorIcon)`
  margin: 0 10px;
`;

const Vote = () => {
    return (
      <StyledVote>
        <Upvote>
          <UpvoteIcon/>
          <UpvoteCount>22</UpvoteCount>
        </Upvote>
        <SeparatorIcon/>
        <Downvote>
          <DownvoteIcon/>
          <DownvoteCount>16</DownvoteCount>
        </Downvote>
      </StyledVote>
    );
};

export default Vote;
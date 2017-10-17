import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { styles, styleUtils, Elems } from '@styles/index';
import UpvoteIcon from '@src/components/icons/Upvote/Upvote';
import _DownvoteIcon from '@src/components/icons/Downvote/Downvote';
import _SeparatorIcon from '@src/components/icons/SeparatorIcon/SeparatorIcon';
import ThreeDot from '@src/components/icons/ThreeDot/ThreeDot';
import Balloon from '@src/components/icons/Balloon/Balloon';

const StyledLower = styled.div`
  padding: 4px 12px 0;
  display: flex;
  justify-content: space-between;`;

const LowerLeft = styled.div``;

const LowerRight = styled.div`
  display: flex;
  align-items: center;`;

const VoteCount = styled.span`
  margin-left: 4px;`

const UpvoteCount = styled(VoteCount)``;

const DownvoteCount = styled(VoteCount)``;

const DownvoteIcon = styled(_DownvoteIcon)`
  margin-left: 10px;`;

const CommentCount = styled.span`
  margin-left: 4px;`;

const SeparatorIcon = styled(_SeparatorIcon)`
  margin: 0 10px;
`;

const Lower = (props) => {
  return (
    <StyledLower>
      <LowerLeft>
        <UpvoteIcon/>
        <UpvoteCount>23</UpvoteCount>
        <DownvoteIcon/>
        <DownvoteCount>44</DownvoteCount>
      </LowerLeft>
      <LowerRight>
        <ThreeDot/>
        <SeparatorIcon/>
        <Balloon/>
        <CommentCount>26</CommentCount>
      </LowerRight>
    </StyledLower>
  );
};

export default Lower;
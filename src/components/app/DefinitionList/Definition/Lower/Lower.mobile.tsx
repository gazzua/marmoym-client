import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { resolveNames, withProps } from '@src/styles/utils';
import { Div, Span } from '@src/styles/elem';
import { border } from '@src/styles/debug';
import BadgeList from '@src/components/app/BadgeList/BadgeList';
import UpvoteIcon from '@src/components/icons/Upvote/Upvote';
import DownvoteIcon from '@src/components/icons/Downvote/Downvote';
import SeparatorIcon from '@src/components/icons/Separator/Separator';
import ThreeDot from '@src/components/icons/ThreeDot/ThreeDot';
import Balloon from '@src/components/icons/Balloon/Balloon';

const Left = Div.extend``;
const Right = Div.extend``;

const StyledLower = Div.extend`
  ${border('black')}
`;

const Lower = (props) => {
  return (
    <StyledLower>
      <Left>
        <UpvoteIcon/>
        <Span>23</Span>
        <DownvoteIcon/>
        <Span>44</Span>
      </Left>
      <Right>
        <ThreeDot/>
        <SeparatorIcon/>
        <Balloon/>
        <Span>26</Span>
      </Right>
    </StyledLower>
  );
};

export default Lower;
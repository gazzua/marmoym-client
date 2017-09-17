import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { resolveNames, withProps } from 'styles/utils';
import { Div, Span } from 'styles/elem';
import { border } from 'styles/debug';
import BadgeList from 'components/BadgeList/BadgeList';
import Star from 'components/common/Star/Star';

const Meta = Div.extend``;
const Term = Div.extend``;
const Author = Span.extend``;
const Time = Span.extend``;
const UpperTop = Div.extend``;
const UpperBottom = Div.extend``;
const Roman = Span.extend``;
const Pos = Span.extend``;
const BottomMiddle = Div.extend``;
const BottomRight = Div.extend``;

const StyledUpper = Div.extend`
  ${border('black')}
`;

const Upper = (props) => {
  return (
    <StyledUpper>
      <UpperTop>
        <BadgeList badges={props.badges}/>
        <Meta>
          <Author>홍길동</Author>
          <Time>3주전</Time>
        </Meta>
      </UpperTop>
      <UpperBottom>
        <Term>{props.term}</Term>
        <BottomMiddle>
          <Roman>roman</Roman>
          <Pos>pos</Pos>
        </BottomMiddle>
        <BottomRight>
          <Star/>
        </BottomRight>
      </UpperBottom>
    </StyledUpper>
  );
};

const Definition = (props) => {
  return (
    <Upper {...props}/>
  );
};

export default Definition;
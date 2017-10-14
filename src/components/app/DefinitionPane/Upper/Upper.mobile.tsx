import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { resolveNames, withProps } from '@src/styles/utils';
import { Div, Span } from '@src/styles/elem';
import { border } from '@src/styles/debug';
import BadgeList from '@src/components/app/BadgeList/BadgeList';
import StarIcon from '@src/components/icons/Star/Star';

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
          <Author>author=user_id : {props.def.get('defs').get(0).get('user_id')}/</Author>
          <Time>작성시간 : 'something'</Time>
        </Meta>
      </UpperTop>
      <UpperBottom>
        <Term>{props.def.get('term')}</Term>
        <BottomMiddle>
          <Roman>{props.def.get('termRoman')}</Roman>
          <Pos>{props.def.get('defs').get(0).get('poss')}</Pos>
        </BottomMiddle>
        <BottomRight>
          <StarIcon/>
        </BottomRight>
      </UpperBottom>
    </StyledUpper>
  );
};

export default Upper;
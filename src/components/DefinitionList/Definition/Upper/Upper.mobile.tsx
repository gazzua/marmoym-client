import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { resolveNames, withProps } from 'styles/utils';
import { Div, Span } from 'styles/elem';
import { border } from 'styles/debug';
import BadgeList from 'components/BadgeList/BadgeList';

const Meta = Div.extend``;
const Term = Div.extend``;
const Author = Span.extend``;
const Time = Span.extend``;
const UpperTop = Div.extend``;

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
      <Term>{props.term}</Term>
    </StyledUpper>
  );
};

const Definition = (props) => {
  return (
    <Upper {...props}/>
  );
};

export default Definition;
import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { resolveNames, withProps } from '@src/styles/styleUtils';
import { Div, Span } from '@src/styles/elems';
import { styles, Colors } from '@styles/index';
import StarIcon from '@src/components/icons/Star/Star';

const StyledUpper = Div.extend`
  padding: 0 12px;
  border-bottom: 1px solid ${Colors.GRAY4};
`;

const UpperTop = Div.extend`
  display: flex;
  font-size: 12px;
  justify-content: space-between;
`;

const Meta = Div.extend``;
const Author = Span.extend``;
const Time = Span.extend`
  margin-left: 5px;`;

const UpperBottom = Div.extend`
 padding: 3px 0px 4px`;

const Term = Span.extend`
  font-size: 16px;
  font-weight: bold;
  color: ${Colors.BLACK4};
  overflow-wrap: break-word;
  `;

const Roman = Span.extend`
  margin-left: 3px;
  font-size: 12px;
  color: ${Colors.BLACK6};`;

const StyledStarIcon = styled(StarIcon)``;
const Pos = Span.extend``;
const BottomMiddle = Div.extend``;
const BottomRight = Div.extend``;
  
const Upper = (props) => {
  return (
    <StyledUpper>
      <UpperTop>
        <Div>{'badges'}</Div>
        <Meta>
          <Author>{props.User.get('username')}</Author>
          <Time>{'time'}</Time>
        </Meta>
      </UpperTop>
      <UpperBottom>
        <Term>{props.Term.get('label')}</Term>
        <Roman>{props.Term.get('roman')}</Roman>
      </UpperBottom>
    </StyledUpper>
  );
};

export default Upper;
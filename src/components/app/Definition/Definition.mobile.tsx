import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { resolveNames, withProps } from '@src/styles/utils';
import { Div, P, Span } from '@src/styles/elem';
import { border } from '@src/styles/debug';
import BadgeList from '@src/components/app/BadgeList/BadgeList';
import { Definition } from '@src/components/ComponentTypes';
import Upper from './Upper/Upper';
import Lower from './Lower/Lower';
import T from '@src/components/app/T/T';

const Label = Div.extend``;
const Usage = Div.extend``;
const Pos = Div.extend``;
const Media = Div.extend``;

const StyledDefinition = Div.extend`
  margin-top: 15px;
`;

const Definition: React.SFC<Definition.Props> = (props) => {
  console.log('render definition', props);
  return (
    <StyledDefinition
      onClick={props.handleClick}>
      <Upper {...props}/>
      <Label>
        <T label={'power'}/>
        <Span>{props.label}</Span>
      </Label>
      <Usage>{props.usage}</Usage>
      <Pos>{props.pos}</Pos>
      <Media>{props.media}</Media>
      <Lower {...props}/>
    </StyledDefinition>
  );
};

export default Definition;
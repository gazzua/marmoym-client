import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { resolveNames, withProps } from 'styles/utils';
import { Div, P } from 'styles/elem';
import { border } from 'styles/debug';
import BadgeList from '../../BadgeList/BadgeList';
import * as DefinitionType from './DefinitionType';
import Upper from './Upper/Upper';

const Label = P.extend``;
const Usage = Div.extend``;
const Pos = Div.extend``;
const Media = Div.extend``;

const StyledDefinition = Div.extend`
  margin-top: 15px;
`;

const Definition: React.SFC<DefinitionType.Props> = (props) => {
  return (
    <StyledDefinition>
      <Upper {...props}/>
      <Label>{props.label}</Label>
      <Usage>{props.usage}</Usage>
      <Pos>{props.pos}</Pos>
      <Media>{props.media}</Media>
    </StyledDefinition>
  );
};

export default Definition;
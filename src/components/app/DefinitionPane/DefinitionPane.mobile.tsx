import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { resolveNames, withProps } from '@src/styles/styleUtils';
import { Div, P, Span } from '@src/styles/elems';
import { border } from '@src/styles/debug';
import BadgeList from '@src/components/app/BadgeList/BadgeList';
import { DefinitionPane } from '@src/components/ComponentTypes';
import Upper from './Upper/Upper';
import Lower from './Lower/Lower';
import Locale from '@src/components/app/Locale/Locale';

const Label = Div.extend``;
const Usage = Div.extend``;
const Pos = Div.extend``;
const Media = Div.extend``;

const StyledDefinitionPane = Div.extend`
  margin-top: 15px;
`;

const DefinitionPane: React.SFC<DefinitionPane.Props> = (props) => {
  // console.log('render definition', props);
  return (
    <StyledDefinitionPane>
      {/* <Upper {...props}/>
      <Label>
        <T label={'power'}/>
        <Span>{props.def.get('defs').get(0).get('label')}</Span>
      </Label>
      <Usage>{props.def.get('defs').get(0).get('usages')}</Usage>
      <Pos>{props.def.get('defs').get(0).get('poss')}</Pos>
      <Media>{props.media}</Media>
      <Lower {...props}/> */}
    </StyledDefinitionPane>
  );
};

export default DefinitionPane;
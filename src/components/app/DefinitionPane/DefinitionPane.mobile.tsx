import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { resolveNames, withProps } from '@src/styles/styleUtils';
import { Div, P, Span } from '@src/styles/elems';
import { styles, Colors } from '@styles/index';
import { DefinitionPane } from '@src/components/ComponentTypes';
import Upper from './Upper/Upper';
import Lower from './Lower/Lower';
import Locale from '@src/components/app/Locale/Locale';

const Label = Div.extend``;
const Usage = Div.extend``;
const Pos = Div.extend``;
const ExtResource = Div.extend``;

const StyledDefinitionPane = Div.extend`
  margin-top: 5px;
  padding: 8px 0px;
  color: ${Colors.BLACK5};
  background-color: ${Colors.WHITE3};
  border: 1px solid #c5b9ce;
`;

const Body = Div.extend`
  padding: 9px 12px;
`;

const renderUsages = (Usages) => {
  return Usages.map(usage => {
    return <Usage key={usage.id}>{usage.label}</Usage>
 });
}

const renderPoss = (Poss) => {
  return Poss.map((pos, idx) => {
    return <Pos key={idx}>{pos.label}</Pos>
  });
}

const DefinitionPane: React.SFC<DefinitionPane.Props> = (props) => {
  console.log('render definition', props.Definition.toJS());
  const { Definition } = props;
  return (
    <StyledDefinitionPane>
      <Upper
        badges={''}
        author={Definition.get('username')}
        Term={Definition.get('$term')}/>
      <Body>
        <Div>{renderPoss(Definition.get('Poss'))}</Div>
        <Label>
          <Span>{Definition.get('label')}</Span>
        </Label>
        <Div>
          {renderUsages(Definition.get('Usages'))}
        </Div>
        <ExtResource>{''}</ExtResource>
      </Body>
      <Lower 
        upvote={''}
        downvote={''}/>
    </StyledDefinitionPane>
  );
};

export default DefinitionPane;
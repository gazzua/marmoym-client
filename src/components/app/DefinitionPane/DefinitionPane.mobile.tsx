import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { resolveNames, withProps } from '@src/styles/styleUtils';
import { styles, Colors } from '@styles/index';
import { DefinitionPane } from '@src/models/ComponentTypes';
import Upper from './Upper/Upper';
import Lower from './Lower/Lower';
import Locale from '@containers/LocaleContainer/LocaleContainer';

const Label = styled.div``;
const Usage = styled.div``;
const Pos = styled.div``;
const ExtResource = styled.div``;

const StyledDefinitionPane = styled.div`
  margin-top: 5px;
  padding: 8px 0px;
  color: ${Colors.BLACK5};
  background-color: ${Colors.WHITE3};
  border: 1px solid #c5b9ce;
`;

const Body = styled.div`
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
  const { Definition } = props;
  return (
    <StyledDefinitionPane>
      <Upper
        badges={''}
        User={Definition.get('$User')}
        Term={Definition.get('$Term')}/>
      <Body>
        <div>{renderPoss(Definition.get('Poss'))}</div>
        <Label>
          <span>{Definition.get('label')}</span>
        </Label>
        <div>
          {renderUsages(Definition.get('Usages'))}
        </div>
        <ExtResource>{''}</ExtResource>
      </Body>
      <Lower 
        upvote={''}
        downvote={''}/>
    </StyledDefinitionPane>
  );
};

export default DefinitionPane;
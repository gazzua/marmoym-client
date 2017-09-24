import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { border } from '@src/styles/debug';
import Definition from '@src/components/app/Definition/Definition';

const renderDefinitions = (definitions) => {
  if (!definitions) {
    return null;
  }

  console.log("definitions", definitions.toJS());
  return definitions.map((definition, i) => (
    <Definition
      key={i}
      term={definition.get('term')}
      label={definition.get('label')}
      usage={definition.get('usage')}
      pos={definition.get('pos')}
      media={definition.get('media')}
      origin={definition.get('origin')}
      badges={definition.get('badges')}/>
  ));
}

const StyledDefinitionList = styled.div`
  ${border('black')}
`;

const DefinitionList = (props) => (
  <StyledDefinitionList>
    {renderDefinitions(props.definitions)}
  </StyledDefinitionList>
);

export default DefinitionList;
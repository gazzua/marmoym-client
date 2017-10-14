import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { border } from '@src/styles/debug';
import DefinitionContainer from '@src/containers/DefinitionContainer/DefinitionContainer';
import DefinitionPane from '@src/components/app/DefinitionPane/DefinitionPane';

const renderDefinitions = (definitions) => {
  console.log("definitions", definitions); //immutable list
  
  for (var i = 0; i < definitions.length; i++) {
    definitions[i]
  }
  return definitions.map((def, i) => {
    // console.log(123, def.get('term'));
    return (
      <DefinitionPane 
        key={def.get('term')}
        def={def}/>
    );
  });
}

const StyledDefinitionList = styled.div`
  ${border('black')}
`;

const DefinitionList = (props) => (
  <StyledDefinitionList>
    {''}
  </StyledDefinitionList>
);

export default DefinitionList;
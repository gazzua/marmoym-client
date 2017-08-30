import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import Definition from '../Definition/Definition';

const renderDefinition = (definitions) => {
  return definitions.map((def, i) => 
    <Definition
      key={i}
      def={def.def}
      usage={def.usage}/>
  );
}

const StyledDefinitionList = styled.div``;

const DefinitionList = (props) => (
  <StyledDefinitionList>
    {renderDefinition(props.defList)}
  </StyledDefinitionList>
);

export default DefinitionList;
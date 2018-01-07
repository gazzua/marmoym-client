import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { styles, Colors } from '@styles/index';

const StyledDefinitionGroup = styled.div`
  background-color: ${Colors.WHITE2};
  border-top: 1px solid ${Colors.GRAY5}
`;
const StyledDefinition = styled.div``;
const DefinitionLabel = styled.p``;
const DefinitionInput = styled.input`
  width: 100%;
  height: 40px;
  border : 1px solid black;
`;

function renderDefinition(props) {
  return (
    <StyledDefinition>
      <DefinitionLabel>뜻</DefinitionLabel>
      <DefinitionInput/>
    </StyledDefinition>
  );
}

const DefinitionGroup = (props) => {
  return (
    <StyledDefinitionGroup>
      {renderDefinition(props)}
    </StyledDefinitionGroup>
  );
};

export default DefinitionGroup;

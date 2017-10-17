import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { styles } from '@styles/index';
import DefinitionContainer from '@src/containers/DefinitionContainer/DefinitionContainer';
import DefinitionPane from '@src/components/app/DefinitionPane/DefinitionPane';

const renderDefinitions = (definitions, inDisplay) => {
  return definitions.map((Definition, idx) => {
    return (
      <DefinitionPane 
        key={Definition.get('id')}
        Definition={Definition}/>
    );
  }).toArray();
}

const StyledDefinitionList = styled.div`
  ${styles.border('black')}
`;

const DefinitionList = (props) => (
  <StyledDefinitionList>
    {renderDefinitions(props.definitions, props.inDisplay)}
  </StyledDefinitionList>
);

export default DefinitionList;
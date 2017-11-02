import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { styles } from '@styles/index';
import DefinitionContainer from '@src/containers/DefinitionContainer/DefinitionContainer';
import DefinitionPane from '@src/components/app/DefinitionPane/DefinitionPane';

function renderDefinitions(props) {
  return props.definitions.map((Definition, idx) => {
    return (
      <DefinitionPane
        key={Definition.get('id')}
        Definition={Definition}
        handleClickTerm={props.handleClickTerm}/>
    );
  }).toArray();
}

const StyledDefinitionList = styled.div`
`;

const DefinitionList = (props) => (
  <StyledDefinitionList>
    {renderDefinitions(props)}
  </StyledDefinitionList>
);

export default DefinitionList;

import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { border } from '@src/styles/debug';
import DefinitionContainer from '@src/containers/DefinitionContainer/DefinitionContainer';
import Definition from '@src/components/app/Definition/Definition';

const renderDefinitions = (defIds) => {
  console.log("defIds", defIds);
  return defIds.map((defId, i) => {
    return (
      <DefinitionContainer
        key={defId}
        defId={defId}
      />
    );
  });
}

const StyledDefinitionList = styled.div`
  ${border('black')}
`;

const DefinitionList = (props) => (
  <StyledDefinitionList>
    {renderDefinitions(props.defIds)}
  </StyledDefinitionList>
);

export default DefinitionList;
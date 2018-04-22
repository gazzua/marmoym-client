import PropTypes from 'prop-types';
import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { border } from '@styles/styles';
import DefinitionContainer from '@src/containers/DefinitionContainer/DefinitionContainer.mobile';
import DefinitionPane from '@src/components/app/DefinitionPane/DefinitionPane.mobile';

const StyledDefinition = styled.div``;

const Definition = ({
  definition,
}) => {
  return (
    <div>
      <div>
        {definition['term_label']}
      </div>
      <div>
        {definition['definition_label']}
      </div>
    </div>
  )
}

const Definitions = ({
  definitions,
}) => {
  return (definitions && definitions.map) 
    ? definitions.map((definition, idx) => {
      return (
        <Definition
          key={idx}
          definition={definition}/>
      );
      // return (
      //   <DefinitionPane
      //     key={Definition.get('id')}
      //     Definition={Definition}
      //     handleClickTerm={props.handleClickTerm}/>
      // );
    })
    : null;
}

const StyledDefinitionList = styled.div`
`;

const DefinitionList = ({
  definitions,
}) => (
  <StyledDefinitionList>
    <Definitions 
      definitions={definitions}/>
  </StyledDefinitionList>
);

DefinitionList.propTypes = {
  definitions: PropTypes.array,
}

export default DefinitionList;

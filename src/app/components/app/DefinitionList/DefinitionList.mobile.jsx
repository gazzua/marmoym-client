import PropTypes from 'prop-types';
import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { border } from '@styles/styles';
import DefinitionContainer from '@src/containers/DefinitionContainer/DefinitionContainer.mobile';
import DefinitionPane from '@src/components/app/DefinitionPane/DefinitionPane.mobile';

const StyledDefinition = styled.div``;

const Low = styled.div`
  display: flex;
  font-size: 12px;
  justify-content: space-between;
`;
const StyledDefinitionPane = styled.div`
  margin-top: 5px;
  padding: 8px 0px;
  ${border('black')};
`;

const Definition = ({
  definition,
}) => {
  return (
    <StyledDefinitionPane>
      <Low>
        <div>
          {definition['term_label']}
        </div>
        <div>
          {definition['pos']}
        </div>
      </Low>
      <Low>
        {definition['definition_label']}
      </Low>
    </StyledDefinitionPane>
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

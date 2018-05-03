import PropTypes from 'prop-types';
import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { border } from '@styles/styles';
import DefinitionContainer from '@src/containers/DefinitionContainer/DefinitionContainer.mobile';

const Row = styled.div`
  display: flex;
  font-size: 12px;
  justify-content: space-between;
`;
const StyledDefinition = styled.div`
  margin-top: 5px;
  padding: 8px 0px;
  ${border('black')};
`;

const Definition = ({
  definition,
  handleClick,
}) => {
  return (
    <StyledDefinition
    onClick = {(e) => {
      handleClick(e, definition.get('definition_id'));
    }}>
      <Row>
        <div>
          {definition.get('term_label')}
        </div>
        <div>
          {definition.get('pos')}
        </div>
      </Row>
      <Row>
        {definition.get('definition_label')}
      </Row>
    </StyledDefinition>
  )
}

const Definitions = (props) => {
  return (props.definitions && props.definitions.map) 
    ? props.definitions.map((definition, idx) => {
      return (
        <Definition
          handleClick={props.handleClickDefinition}
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
  handleClickDefinition,
}) => (
  <StyledDefinitionList>
    <Definitions 
      definitions={definitions}
      handleClickDefinition={handleClickDefinition}/>
  </StyledDefinitionList>
);

DefinitionList.propTypes = {
  definitions: PropTypes.array,
  handleClickDefinition: PropTypes.func.isRequired,
}

export default DefinitionList;

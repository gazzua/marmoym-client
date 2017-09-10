import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

const StyledDefinition = styled.div`
  margin-top: 15px;
`;

const Definition = (props) => (
  <StyledDefinition>
    <div>
      {props.term}
    </div>
    <div>
      {props.label}
    </div>
    <div>
      {props.usage}
    </div>
    <div>
      {props.pos}
    </div>
    <div>
      {props.media}
    </div>
    <div>
      {props.usage}
    </div>
  </StyledDefinition>
);

export default Definition;
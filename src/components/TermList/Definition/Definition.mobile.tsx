import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

const StyledDefinition = styled.div``;

const Definition = (props) => (
  <StyledDefinition>
    <div>
      {props.def}
    </div>
    <div>
      {props.usage}
    </div>
  </StyledDefinition>
);

export default Definition;
import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { styles, Colors } from '@styles/index';
import StyledDefinitionGroup from './DefinitionGroup/DefinitionGroup';
import UsageGroup from './UsageGroup/UsageGroup';

const StyledDefine = styled.div``;

const Term = styled.div`
  background-color: ${Colors.WHITE2};
  padding: 15px 7px;

  > input {
    margin-top: 5px;
    width: 100%;
    height: 40px;
    border : 1px solid black;
  }
`;
const TermLabel = styled.p`
  font-weight: bold;
  font-size: 17px;
`;

const Define = (props) => {
  return (
    <StyledDefine {...props}>
      <Term>
        <TermLabel>말</TermLabel>
        <input/>
      </Term>
      <StyledDefinitionGroup/>
      <UsageGroup usages={props.usages}/>
    </StyledDefine>
  );
};

export default Define;

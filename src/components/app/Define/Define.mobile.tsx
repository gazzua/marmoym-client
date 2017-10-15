import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { withProps } from '@src/styles/styleUtils';
import { Div, Span, Input, P, Button } from '@src/styles/elems';

const StyledDefine = styled.div`
  padding : 10px;  
`;
const Usage = Div.extend``;
const UsageInput = Input.extend`
  width: 90%;
  height: 40px;
  border : 1px solid black;
`;
const UsageLabel = P.extend``;
const UsageAddButton = Button.extend`
  width : 100%;
  border : none;
  height : 40px;
  outline : none;
  cursor : pointer;
`;
const UsageInputConatiner = Div.extend``;
const UsageDeleteButton = Button.extend``;

const renderUsage = (props) => {
  const UsageList = props.usages.map((usage, i) => (
    <UsageInputConatiner key={i}>
      <UsageInput
        defaultValue={usage}
        placeholder="말의 쓰임새를 써주세요(ex: 실화니;이거실화임?)"/>
      <UsageDeleteButton>X</UsageDeleteButton>
    </UsageInputConatiner>
  ));
  return (
    <Usage>
      <UsageLabel>쓰임새</UsageLabel>
      {UsageList}
      <UsageAddButton onClick={props.handleClickAddUsage}>+ 쓰임새 추가하기</UsageAddButton>
    </Usage>  
  );
};

const StyledTerm = Div.extend``;
const TermLabel = P.extend``;
const TermInput = Input.extend`
  width: 100%;
  height: 40px;
  border : 1px solid black;
`;

const StyledDefinition = Div.extend``;
const DefinitionLabel = P.extend``;
const DefinitionInput = Input.extend`
  width: 100%;
  height: 40px;
  border : 1px solid black;
`;


const Define = (props) => {
  return (
    <StyledDefine {...props}>
      <StyledTerm>
        <TermLabel>올릴말</TermLabel>
        <TermInput />
      </StyledTerm>
      <StyledDefinition>
        <DefinitionLabel>뜻</DefinitionLabel>
        <DefinitionInput />
      </StyledDefinition>
      {renderUsage(props)}
    </StyledDefine>
  );
};

export default Define;
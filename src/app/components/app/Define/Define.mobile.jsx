import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

const StyledDefine = styled.div`
  padding : 10px;
`;
const Usage = styled.div``;
const UsageInput = styled.input`
  width: 90%;
  height: 40px;
  border : 1px solid black;
`;
const UsageLabel = styled.p``;
const UsageAddButton = styled.button`
  width : 100%;
  border : none;
  height : 40px;
  outline : none;
  cursor : pointer;
`;
const UsageInputConatiner = styled.div``;
const UsageDeleteButton = styled.button``;

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

const StyledTerm = styled.div``;
const TermLabel = styled.p``;
const TermInput = styled.input`
  width: 100%;
  height: 40px;
  border : 1px solid black;
`;

const StyledDefinition = styled.div``;
const DefinitionLabel = styled.p``;
const DefinitionInput = styled.input`
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

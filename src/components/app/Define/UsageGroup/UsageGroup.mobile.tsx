import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { styles, Colors } from '@styles/index';

const StyledUsageGroup = styled.div``;
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

const UsageGroup = (props) => {
  const UsageList = props.usages.map((usage, i) => (
    <UsageInputConatiner key={i}>
      <UsageInput
        value={props.usages[i]}
        onChange={(e) => {props.handleChangeInput(e, i)}}
        onBlur={(e) => {props.handleChangeUsage(i, e.target['value'])}}
        placeholder="말의 쓰임새를 써주세요(ex: 실화니;이거실화임?)"/>
      <UsageDeleteButton onClick={e => {props.handleDeleteUsage(i)}}>X</UsageDeleteButton>
    </UsageInputConatiner>
  ));
  
  return (
    <StyledUsageGroup>
      <UsageLabel>쓰임새</UsageLabel>
      {UsageList}
      <UsageAddButton onClick={props.handleClickAddUsage}>+ 쓰임새 추가하기</UsageAddButton>
    </StyledUsageGroup>
  );
};

export default UsageGroup;

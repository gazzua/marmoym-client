import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { withProps } from 'styles/utils';

const StyledDefine = styled.div`
  padding : 10px;  
  input {
    width: 100%;
    height: 40px;
    border : 1px solid black;
  }
  button {
    width : 100%;
    border : none;
    height : 40px;
    outline : none;
    cursor : pointer;
  }
`;

const renderUsage = (props) => {
  const UsageList = props.usages.map((usage, i) => (
    <input
      key={i}
      defaultValue={usage}
      placeholder="말의 쓰임새를 써주세요(ex: 실화니;이거실화임?)"/>
  ));

  return (
    <div>
      <p>쓰임새</p>
      {UsageList}
      <button onClick={props.handleClickAddUsage}>+ 쓰임새 추가하기</button>
    </div>  
  );
};

const StyledTerm = styled.div``;

const Term = (props) => (
  <StyledTerm>
    <p>올릴말</p>
    <input type="text"/>
  </StyledTerm>
);

const StyledDefinition = styled.div``;

const Definition = (props) => (
  <StyledDefinition>
    <div>
      <p>뜻</p>
      <input id=""/>
    </div>
  </StyledDefinition>
);

const Define = (props) => {
  return (
    <StyledDefine {...props}>
      <Term/>
      <Definition/>
      {renderUsage(props)}
    </StyledDefine>
  );
};

export default Define;
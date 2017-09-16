import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { withProps } from '../../utils/styleUtils';

// export namespace AddTerm {
//   export interface Props {
//     defClassName: string;
//   }
// }

const defClassName = 'def';
const StyledAddTerm = styled.div`
  padding : 10px;  
  input {
    width: 100%;
    height: 40px;
    border : 1px solid black;
  }
  .term {
  }
  button {
    width : 100%;
    border : none;
    height : 40px;
    outline : none;
    cursor : pointer;
  }
`;

const _renderUsage = (props) => {
  const UsageList = props.usages.map(usage => (
    <input
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

const AddTerm = (props) => {
  return (
    <StyledAddTerm {...props}>
      <div className={'term'}>
        <p>올릴말</p>
        <input type="text"/>
      </div>
      <div className={defClassName}>
        <div>
          <p>뜻</p>
          <input id=""></input>
        </div>
      </div>
      {_renderUsage(props)}
    </StyledAddTerm>
  );
};

export default AddTerm;
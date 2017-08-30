import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

const StyledAddTerm = styled.div`
  input {
    width: 100%;
    height: 40px;
  }
  .term {

  }
  .def {

  }
`;

const AddTerm = (props) => (
  <StyledAddTerm>
    <div className={'term'}>
      <p>말</p>
      <input type="text"/>
    </div>
    <div className={'def'}>
    <div>
      <p>뜻</p>
      <input id=""></input>
    </div>
    <div>
      <p>용례</p>
      <input type="text"/>
    </div>
    </div>
  </StyledAddTerm>
);

export default AddTerm;
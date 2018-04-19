import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { styles, Colors } from '@styles/index';

const StyledTerms = styled.div`
background-color: white;
padding: 10px;
`;

const Button = styled.button`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
height: 40px;
margin-top: 3px;
border: 1px solid #c5b9ce;
border-radius: 5px;
background-color: ${Colors.GRAY5};
cursor: pointer;

&:hover {
  color: black;
  background-color: ${Colors.BLACK6};
  box-shadow: inset 1px 1px 3px 0px rgba(0,0,0,0.75);
}
`;

const Terms = (props) => (
  <StyledTerms>
    약관 list, checkbox
    <Button onClick={props.handleClickTermsAgree}>
      다음
    </Button>
  </StyledTerms>
);

export default Terms;
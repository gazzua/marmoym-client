import * as React from 'react';
import styled from 'styled-components';

import Color from '@universal/constants/Color';

const Button = styled.button`
  align-items: center;
  background-color: ${Color.GRAY5};
  border: 1px solid #c5b9ce;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  height: 40px;
  justify-content: center;
  margin-top: 3px;
  width: 100%;
  &:hover {
    background-color: ${Color.BLACK6};
    box-shadow: inset 1px 1px 3px 0px rgba(0,0,0,0.75);
    color: ${Color.BLACK1};
  }
`;

const StyledTerms = styled.div`
  background-color: ${Color.WHITE1};
  padding: 10px;
`;

const Terms = (props) => (
  <StyledTerms>
    임시 약관
    <Button onClick={props.handleClickTermsAgree}>
      다음
    </Button>
  </StyledTerms>
);

export default Terms;

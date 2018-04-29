import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { border } from '@styles/styles';
import Color from '@constants/Color';
import Lower from './Lower/Lower.mobile';
import Upper from './Upper/Upper.mobile';

const Row = styled.div`
  margin: 5px 0px;
  display: flex;
  font-size: 15px;
  justify-content: space-between;
`;
const StyledDefinition = styled.div`
  margin: 5px 0px;
  ${border('black')};
`;

// const Label = styled.div``;
// const Usage = styled.div``;
// const Pos = styled.div``;
// const ExtResource = styled.div``;

// const StyledDefinitionPane = styled.div`
//   margin-top: 5px;
//   padding: 8px 0px;
//   color: ${Color.BLACK5};
//   background-color: ${Color.WHITE3};
//   border: 1px solid #c5b9ce;
// `;

// const Body = styled.div`
//   padding: 9px 12px;
// `;

// const renderUsages = (usages) => {
//   return usages.map((usage) => {
//     return <Usage key={usage.id}>{usage.label}</Usage>;
//  });
// };

// const renderPoss = (poss) => {
//   return poss.map((pos, idx) => {
//     return <Pos key={idx}>{pos.label}</Pos>;
//   });
// };

const Definition = () => {
  return (
    <StyledDefinition>
      <Row>
        <div>
          앙기모띠
        </div>
        <div>
          동사
        </div>
      </Row>
      <Row>
        기분좋다라고 하는 뜻
      </Row>
    </StyledDefinition>
  )
}

export default Definition;

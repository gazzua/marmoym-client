import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { border } from '@styles/styles';
import Color from '@constants/Color';
import Lower from './Lower/Lower.mobile';
import Upper from './Upper/Upper.mobile';
import Vote from '@src/components/app/Definition/Vote.mobile';

const Row = styled.div`
  margin: 5px 7px;
  display: flex;
  font-size: 15px;
  justify-content: space-between;
`;
const StyledDefinition = styled.div`
  margin: 5px 0px;
  ${border('black')};
`;

const Definition = ({
  definition,
}) => {
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
      <Row>
        <div>
        </div>
        <div>
          <Vote/>
        </div>
      </Row>
    </StyledDefinition>
  )
}

export default Definition;

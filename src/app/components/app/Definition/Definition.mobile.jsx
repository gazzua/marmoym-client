import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';
import Usage from '@src/components/app/Definition/usage.mobile'

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
  return (definition && definition.length !== 0)
  ? (
    <div>
      <StyledDefinition>
        <Row>
          <div>
            {definition[0].get('term').label}
          </div>
          <div>
            {definition[0].get('poss')[0].label}
          </div>
        </Row>
        <Row>
          {definition[0].get('label')}
        </Row>
      </StyledDefinition>
      <Usage usages={definition[0].get('usages')}/>
    </div>
  )
  : null;
}

export default Definition;

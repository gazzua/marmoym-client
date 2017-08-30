import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { border } from '../../styles/debug';
import Term from './Term/Term';

const renderTermList = (terms) => {
  if (!terms) {
    return null;
  }
  return terms.map((term, i) => {
    return <Term
      key={i}
      name={term.name}
      defList={term.defList}/>
  })
}

const StyledTermList = styled.div`
  ${border('black')}
`;

const TermList = (props) => (
  <StyledTermList>
    {renderTermList(props.terms)}
  </StyledTermList>
);

export default TermList;
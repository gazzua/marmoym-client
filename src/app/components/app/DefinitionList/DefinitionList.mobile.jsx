import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { styles } from '@styles/index';
import DefinitionContainer from '@src/containers/DefinitionContainer/DefinitionContainer.mobile';
import DefinitionPane from '@src/components/app/DefinitionPane/DefinitionPane.mobile';

const Definitions = (props) => {
  console.log(123, props);
  return props.definitions.map((Definition, idx) => {
    console.log(1, Definition);
    return 0;
    // return (
    //   <DefinitionPane
    //     key={Definition.get('id')}
    //     Definition={Definition}
    //     handleClickTerm={props.handleClickTerm}/>
    // );
  });
}

const StyledDefinitionList = styled.div`
`;

const DefinitionList = (props) => (
  <StyledDefinitionList>
    <Definitions {...props}/>
  </StyledDefinitionList>
);

export default DefinitionList;

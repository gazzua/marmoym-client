import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { border } from '../../../styles/debug';
import DefinitionList from '../DefinitionList/DefinitionList';

export namespace Term {
  export interface Props {
    name: string,
    defList: any
  }
};

const StyledTerm = styled.div`
  height: 160px;
  ${border('gray')}
`;

const Term: React.SFC<Term.Props> = (props) => (
  <StyledTerm>
    <div className={'topRow'}>
        <div className={'labelList'}>
          label list
        </div>
        <div>
          author and date
        </div>
    </div>
    <div className={'name'}>
      <span>{props.name}</span>
      <span>romanized</span>
    </div>
    <DefinitionList
      defList={props.defList}/>
    <div className={'bottomRow'}>
      <div>
        up and down
      </div>
      <div>
        rightMenuGroup
      </div>
    </div>
  </StyledTerm>
);

export default Term;
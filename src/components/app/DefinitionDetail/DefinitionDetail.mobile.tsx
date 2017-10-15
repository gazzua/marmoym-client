import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';
import * as _ from 'lodash';

import { Div, P, Span } from '@src/styles/elems';
import { border } from '@src/styles/debug';
import DefinitionContainer from '@src/containers/DefinitionContainer/DefinitionContainer';
import CommentListContainer from '@src/containers/CommentListContainer/CommentListContainer';

const StyledDefinitionDetail = Div.extend`
  margin-top: 15px;
`;

const DefinitionDetail: React.SFC = (props) => {
  return (
    <StyledDefinitionDetail>
      <DefinitionContainer
        term={_.get(props, ['match', 'params', 'termLabel'])}
        id={_.get(props, ['match', 'params  ', 'defId'])}/>
      <CommentListContainer/>
    </StyledDefinitionDetail>
  );
};

export default DefinitionDetail;
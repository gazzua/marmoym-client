import * as React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled, { StyledFunction } from 'styled-components';

import DefinitionListContainer from '@src/containers/DefinitionListContainer/DefinitionListContainer';
import DefineContainer from '@src/containers/DefineContainer/DefineContainer';
import DefinitionDetailLayout from '@src/layouts/DefinitionDetailLayout/DefinitionDetailLayout';

const StyledDefinitionLayout = styled.div`
`;

const DefinitionLayout = ({ match }) => {
  return (
    <StyledDefinitionLayout>
      <Switch>
        <Route path="/" exact component={DefinitionListContainer}/>
        <Route path="/term" exact component={DefinitionListContainer}/>
        <Route path="/term/:termLabel" component={DefinitionListContainer}/>
        <Route path="/term/:termLabel/defId/:defId" component={DefinitionDetailLayout}/>
      </Switch>
    </StyledDefinitionLayout>
  );
};

export default DefinitionLayout;
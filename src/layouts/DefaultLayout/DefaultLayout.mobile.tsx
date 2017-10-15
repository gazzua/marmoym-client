import * as React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled, { StyledFunction } from 'styled-components';
import { withRouter } from 'react-router-dom';

import DefinitionListContainer from '@src/containers/DefinitionListContainer/DefinitionListContainer';
import MastheadContainer from '@src/containers/MastheadContainer/MastheadContainer';
import DefineContainer from '@src/containers/DefineContainer/DefineContainer';
import DefinitionLayout from '@src/layouts/DefinitionLayout/DefinitionLayout';

const StyledDefaultLayout = styled.div`
`;

const DefaultLayout = (props) => {
  return (
    <StyledDefaultLayout>
      <MastheadContainer/>
      <Switch>
        <Route path="/define" component={DefineContainer}/>
        <Route component={DefinitionLayout}/>
      </Switch>
    </StyledDefaultLayout>
  );
};

export default withRouter(DefaultLayout);
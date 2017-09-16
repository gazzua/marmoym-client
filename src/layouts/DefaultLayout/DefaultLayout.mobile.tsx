import * as React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled, { StyledFunction } from 'styled-components';

import DefinitionListContainer from '../../containers/DefinitionListContainer/DefinitionListContainer';
import MastheadContainer from '../../containers/MastheadContainer/MastheadContainer';
import DefineContainer from '../../containers/DefineContainer/DefineContainer';

const StyledDefaultLayout = styled.div`
`;

const DefaultLayout = (props) => {
  return (
    <StyledDefaultLayout>
      <MastheadContainer/>
      <Switch>
        <Route path="/term" component={DefinitionListContainer}/>
        <Route path="/define" component={DefineContainer}/>
        <Route component={DefinitionListContainer}/>
      </Switch>
    </StyledDefaultLayout>
  );
};

export default DefaultLayout;
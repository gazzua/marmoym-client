import * as React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AppContainer from '../containers/AppContainer/AppContainer'
import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout';
import ErrorLayout from '../layouts/ErrorLayout/ErrorLayout';

export default () => {
  return (
    <BrowserRouter>
      <AppContainer>
        <Switch>
          <Route path='/error' component={ErrorLayout}/>
          <Route path='/' component={DefaultLayout}/>
        </Switch>
    </AppContainer>
   </BrowserRouter>
  );
}



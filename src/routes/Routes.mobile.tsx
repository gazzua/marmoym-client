import * as React from 'react';
import { withRouter, BrowserRouter, Route, Switch } from "react-router-dom";

import RootContainer from '@src/containers/RootContainer/RootContainer'
import DefaultRoute from './DefaultRoute/DefaultRoute';
import ErrorRoute from './ErrorRoute/ErrorRoute';

const Routes = () => {
  return (
    <BrowserRouter>
      <RootContainer>
        <Switch>
          <Route path='/error' component={ErrorRoute}/>
          <Route path='/' component={DefaultRoute}/>
        </Switch>
      </RootContainer>
   </BrowserRouter>
  );
}

/**
 * Do not connect redux, otherwise react-hot-loader won't work.
 * Dispatch action in RootContainer if necessary.
 */
export default Routes;

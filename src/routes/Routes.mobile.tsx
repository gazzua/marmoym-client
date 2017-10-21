import * as React from 'react';
import { withRouter, BrowserRouter, Route, Switch } from "react-router-dom";

import RootContainer from '@src/containers/RootContainer/RootContainer'
import DefaultLayout from '@src/layouts/DefaultLayout/DefaultLayout';
import ErrorLayout from '@src/layouts/ErrorLayout/ErrorLayout';
import DefaultRoute from './DefaultRoute/DefaultRoute';

const Routes = () => {
  return (
    <BrowserRouter>
      <RootContainer>
        <Switch>
          <Route path='/error' component={ErrorLayout}/>
          <Route path='/' component={DefaultRoute}/>
        </Switch>
    </RootContainer>
   </BrowserRouter>
  );
}

/**
 * Do not connect redux, otherwise react-hot-loader won't work.
 */
export default Routes;
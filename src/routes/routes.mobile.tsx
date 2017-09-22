import * as React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import RootContainer from '@src/containers/RootContainer/RootContainer'
import DefaultLayout from '@src/layouts/DefaultLayout/DefaultLayout';
import ErrorLayout from '@src/layouts/ErrorLayout/ErrorLayout';

export default () => {
  return (
    <BrowserRouter>
      <RootContainer>
        <Switch>
          <Route path='/error' component={ErrorLayout}/>
          <Route path='/' component={DefaultLayout}/>
        </Switch>
    </RootContainer>
   </BrowserRouter>
  );
}



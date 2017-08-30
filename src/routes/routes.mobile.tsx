import * as React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AppContainer from '../containers/AppContainer/AppContainer'
import AddTermContainer from '../containers/AddTermContainer/AddTermContainer';
import TermListContainer from '../containers/TermListContainer/TermListContainer';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact
          path='/' 
          render={() => 
            <AppContainer 
              pageContent={TermListContainer}/>}/>
        <Route path='/term' component={AppContainer}/>
        <Route path='/addTerm' render={() => <AppContainer pageContent={AddTermContainer}/>}/>
      </Switch>
   </BrowserRouter>
  );
}



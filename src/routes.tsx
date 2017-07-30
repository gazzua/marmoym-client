import * as React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import MainContainer from './containers/MainContainer/MainContainer';
// import CommonLayout from './containers/MainContainer/MainContainer';
import MainLayout from './components/MainLayout/MainLayout';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={MainLayout}/>
        <Route exact path='/term' component={MainLayout}/>  
        {/* <Route exact path='/addTerm' component={AddTermLayout}/>  */}
      </Switch>
   </BrowserRouter>
  )
}




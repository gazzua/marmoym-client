import * as React from 'react';
import { withRouter, BrowserRouter, Route, Switch } from "react-router-dom";

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

/**
 * Router-router navigation test logic
 * DO NOT DELETE
 */
// const _A = (props) => {
//   return <div onClick={() => {console.log(1); props.history.push('B')}}>AA</div>
// }
// const A = withRouter(_A)

// const _B = (props) => {
//   return <div onClick={() => {console.log(2); props.history.push('A')}}>BB</div>
// }
// const B = withRouter(_B);
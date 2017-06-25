import { BrowserRouter as Router, Route } from "react-router-dom";
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

import MainContainer from './containers/MainContainer/MainContainer';
import { initRedux } from './utils/ReduxUtils';

let store = initRedux();

// createStore is for a single reducer
// combineReducers is for multi reducers

export default
  <Provider store = {store}>
    <Router>
      <div>
        <Route exact path="/" component={MainContainer} />
      </div>
    </Router>
  </Provider>
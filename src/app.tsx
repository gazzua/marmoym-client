import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Router, Route, Switch } from 'react-router';

import routes from './routes';
import Temp from './components/Temp'

/** 
 * Root html dom node on which React Application is rendered.
 */
const rootEl = document.getElementById('main');

/**
 * Initialize style
 */
require('./styles/common.scss')

/**
 * ...
 */
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    rootEl
  )
}

/**
 * Initial rendering
 */
render(routes)

/**
 * ...
 */
if (module.hot) {
  module.hot.accept('./routes', () => { 
    require("./routes")
    console.log('hot replace')
    render(routes) 
  })
}
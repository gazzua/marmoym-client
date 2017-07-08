import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import routes from './routes';

/**
 * Root html dom node on which React Application would render.
 */
const rootEl = document.getElementById('main');

/**
 * 
 */
import styles from './styles/common.scss'
console.log(123, styles);



/**
 * ...
 */
const render = (Component) => {
  ReactDOM.render(
    routes,
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
    console.log('hot replace')
    render(routes) 
  })
}
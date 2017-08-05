import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import routes from './routes';
import { configureStore } from './store';

/** 
 * Root html dom node on which React Application is rendered.
 */
const rootEl = document.getElementById('main');

const store = configureStore()

/**
 * ...
 */
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component/>
      </Provider>
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
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import configureStore from '@state/configureStore';
import globalStyle from '@src/styles/global';
import RouterContainer from '@containers/RouterContainer/RouterContainer.mobile';

const rootEl = document.getElementById('marmoym-app');
const store = configureStore();

/**
 * Polyfills
 */
if ((typeof window !== 'undefined' && !window._babelPolyfill) 
  || (typeof global !== 'undefined' && !global._babelPolyfill)) {
  require('@babel/polyfill');
}

/**
 * ...
 */
globalStyle();

const render = (Component) => {
  ReactDOM.render(
    <AppContainer warnings={false}>
      <Provider store={store}>
        <Component/>
      </Provider>
    </AppContainer>,
    rootEl,
  );
};

render(RouterContainer);

if (module.hot) {
  console.log(123, 11);
  module.hot.accept('./containers/RouterContainer/RouterContainer.mobile', () => {
    const newRoutes = require('./containers/RouterContainer/RouterContainer.mobile').default;
    console.log('hot replace');
    render(newRoutes);
  });
}

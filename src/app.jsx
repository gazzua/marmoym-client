import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { configureStore } from '@src/store';
import Routes from '@src/routes/Routes.mobile';

const rootEl = document.getElementById('marmoym-app');
const store = configureStore();

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

render(Routes);

if (module.hot) {
  module.hot.accept('./routes/Routes.mobile', () => {
    require('./routes/Routes.mobile');
    console.log('hot replace');
    render(Routes);
  });
}

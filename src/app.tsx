import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import * as winston from 'winston';
import styled from 'styled-components';

import Routes from '@src/routes/Routes';
import { configureStore } from '@src/store';

const rootEl = document.getElementById('marmoym-app');
const store = configureStore();

const render = (Component) => {
  ReactDOM.render(
    <AppContainer warnings={false}>
      <Provider store={store}>
        <Component/>
      </Provider>
    </AppContainer>,
    rootEl
  );
}

render(Routes);

if (module.hot) {
  module.hot.accept('./routes/Routes', () => { 
    require("./routes/Routes");
    console.log('hot replace');
    render(Routes);
  })
}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import routes from '@src/routes/routes';
import { configureStore } from '@src/store';
import globalStyle from '@src/styles/global';

const rootEl = document.getElementById('main');

const store = configureStore();

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component/>
      </Provider>
    </AppContainer>,
    rootEl
  );
}

render(routes);

if (module.hot) {
  module.hot.accept('./routes/routes', () => { 
    require("./routes/routes");
    console.log('hot replace');
    render(routes);
  })
}
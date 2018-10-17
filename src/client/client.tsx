import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

console.info('[client] App (client.jsx) is running, NODE_ENV: %s', process.env.NODE_ENV);

const appRoot = document.getElementById('app-root');

(function setBabelPolyfill() {
  if ((typeof window !== 'undefined' && !window['_babelPolyfill']) 
    || (typeof global !== 'undefined' && !global['_babelPolyfill'])) {
    console.info(`[client] babel-polyfill is imported, since it wasn't imported yet, ${__filename}`);
    require('babel-polyfill');
  }
})();

(async function initializeAppAfterSettingPolyfill() {
  const [
    appConfig, 
    configureStore, 
    RootContainer,
    globalStyle,
  ] = await Promise.all([
    import('@config/appConfig'), 
    import('@universal/state/configureStore'), 
    import('@containers/app/RootContainer/RootContainer.mobile'),
    import('@universal/styles/globalStyle'),
  ]);

  globalStyle.default();
  const store = configureStore.default({
    initialState: window[appConfig.default.reduxStateKey],
  });

  ReactDOM.hydrate(
    <ReduxProvider store={store}>
      <BrowserRouter>
        <RootContainer.default/>
      </BrowserRouter>
    </ReduxProvider>,
    appRoot,
  );
})();

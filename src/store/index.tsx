import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const configureStore = (state = {}) => {
  const store = createStore(
    reducers, 
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default;
      store.replaceReducer(nextReducer);
    })
  }

  return store;
}
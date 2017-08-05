import { createStore, applyMiddleware, Store } from 'redux';
import reducers from './reducers'
import thunk from 'redux-thunk'

export const configureStore = (state = {}) => {
  const store = createStore(reducers, applyMiddleware(thunk));

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default;
      store.replaceReducer(nextReducer);
    })
  }

  return store;
}
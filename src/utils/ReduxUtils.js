import {combineReducers} from 'redux';

export function initRedux() {
  let store = combineReducers({});
  return store;
}
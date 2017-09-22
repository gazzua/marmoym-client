import { combineReducers } from 'redux';

import termsReducer from './termReducer'
import translateReducer from './translateReducer';

export default combineReducers({
  translateReducer,
  termsReducer
})
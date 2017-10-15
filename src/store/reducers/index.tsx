import { combineReducers } from 'redux';

import definitionReducer from './definitionReducer';
import localeReducer from './localeReducer';
import commentReducer from './commentReducer';
import userReducer from './userReducer';

export default combineReducers({
  localeReducer,
  definitionReducer,
  commentReducer,
  userReducer
})
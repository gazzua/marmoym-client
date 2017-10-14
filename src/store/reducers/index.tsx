import { combineReducers } from 'redux';

import definitionReducer from './definitionReducer';
import translateReducer from './translateReducer';
import commentReducer from './commentReducer';
import userReducer from './userReducer';

export default combineReducers({
  translateReducer,
  definitionReducer,
  commentReducer,
  userReducer
})
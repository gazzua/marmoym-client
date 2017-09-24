import { combineReducers } from 'redux';

import definitionReducer from './definitionReducer';
import translateReducer from './translateReducer';
import commentReducer from './commentReducer';

export default combineReducers({
  translateReducer,
  definitionReducer,
  commentReducer
})
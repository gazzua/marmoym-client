import * as Immutable from 'immutable';

import { ActionTypes }from '@actions/index';
import Definition from '@src/models/Definition';

const initialState = {
  users: Immutable.Map()
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_DEFINITIONS_SUCCESS:
      return getDefinitionDidSucceed(state, action);
    default:
      return state;
  }
};

function getDefinitionDidSucceed(state, action) {
  const { users } = action.payload;

  return {
    ...state,
  };
}
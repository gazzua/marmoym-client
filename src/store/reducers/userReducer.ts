import * as Immutable from 'immutable';

import { ActionTypes }from '@actions/index';
import Definition from '@src/models/Definition';
import User from '@src/models/User';

const users = {
  0: {
    id: '0',
    username: '정원영',
    password: 'mypass',
    email: 'wonyeong91@gmail.com',
    karma: 30,
    created_at: 9999999999999,
    updated_at: 9999999999999,
  }
}

const initialState = {
  users: User.ofMany(users)
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
    users: User.hardMerge(users).into(state.users)  // todo implement softMerge needed
  };
}
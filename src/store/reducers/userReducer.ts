import * as Immutable from 'immutable';

import { ActionTypes } from '@actions/index';
import Definition from '@src/models/Definition';
import User from '@src/models/User';

const _users = {
  0: {
    created_at: 9999999999999,
    email: 'wonyeong91@gmail.com',
    id: '0',
    karma: 30,
    password: 'mypass',
    updated_at: 9999999999999,
    username: '정원영',
  },
};

const initialState = {
  users: User.ofMany(_users),
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
    users: User.hardMerge(users).into(state.users),  // todo implement softMerge needed
  };
}

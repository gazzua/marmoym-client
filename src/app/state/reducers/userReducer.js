import * as Immutable from 'immutable';

import User from '@src/models/User';
import ActionType from '@constants/ActionType';

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
    case ActionType.REQUEST_SIGN_IN_USER_SUCCESS:
      return state;
    case ActionType.REQUEST_SIGN_UP_USER_SUCCESS:
      return state;
      // return signUpUserDidSucceed(state, action);
    default:
      return state;
  }
};

// function getDefinitionDidSucceed(state, action) {
//   //const { users } = action.payload;
//   const users = [{
//     created_at: 0,
//     email: 'email',
//     id: 0,
//     karma: 0,
//     password: 'password',
//     updated_at: 0,
//     username: 'username',
//   }];
//   return {
//     ...state,
//     //users: User.hardMerge(users).into(state.users),  // todo implement softMerge needed
//     users,
//   };
// }

// function signInUserDidSucceed(state, action) {
//   const currentUser = action.payload;
//   return {
//     ...state,
//     currentUser : currentUser,
//   };
// }

// function signUpUserDidSucceed(state, action) {
//   return {
//     // todo
//     ...state,
//   };
// }

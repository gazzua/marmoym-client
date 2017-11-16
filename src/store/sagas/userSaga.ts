import { all, put, call, take, takeEvery, select } from 'redux-saga/effects';

import * as MarmoymApis from '@src/apis/MarmoymApis';
import Action from '@actions/Action';
import ActionType from '@actions/ActionType';

export function* signInUser(action) {
  try {
    const { email, password } = action.payload;
    const data = yield MarmoymApis.signInUser(email, password);

    yield put(Action.SIGN_IN_USER_SUCCESS({
      ...data
    }));

  } catch (err){
    // todos 
  }
}

export default function* userSaga() {  
  yield all([
    takeEvery(ActionType.SIGN_IN_USER, signInUser),
  ]);
}
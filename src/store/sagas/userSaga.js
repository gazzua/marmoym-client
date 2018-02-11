import { all, put, call, take, takeEvery, select } from 'redux-saga/effects';

import * as MarmoymApis from '@src/apis/MarmoymApis';
import * as SignInContainer from '@src/containers/SignInContainer/SignInContainer.mobile';
import Action from '@actions/Action';
import ActionType from '@actions/ActionType';

export function* signInUser(action) {
  try {
    const { email, password, successCallback } = action.payload;
    const data = yield MarmoymApis.signInUser(email, password);

    yield put(Action.SIGN_IN_USER_SUCCESS({
      ...data,
    }));

    successCallback();

  } catch (err) {
    console.error(err);
    return err;
  }
}

export function* signUpUser(action) {
  try {
    const { email, password, username } = action.payload;
    const data = yield MarmoymApis.signUpUser(email, password, username);

    yield put(Action.SIGN_UP_USER_SUCCESS({
      ...data,
    }));
  } catch (err) {
    console.error(err);
    return err;
  }
}

export default function* userSaga() {
  yield all([
    takeEvery(ActionType.SIGN_IN_USER, signInUser),
    takeEvery(ActionType.SIGN_UP_USER, signUpUser),
  ]);
}

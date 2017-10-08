import { all, put, call, take, takeEvery } from 'redux-saga/effects';

import { ActionTypes } from '@actions/index';
import * as ServerSideApis from '@src/apis/ServerSideApis';

export function* getTranslate(action) {
  try {
    const payload = yield ServerSideApis.getTranslate(action.payload.locale);
    yield put({ type: ActionTypes.GET_TRANSLATE_SUCCESS, payload });
  } catch (err) {
    // todos
  }
}

export default function* translateSaga () {  
  yield all([
    takeEvery(ActionTypes.GET_TRANSLATE, getTranslate)
  ]);
}
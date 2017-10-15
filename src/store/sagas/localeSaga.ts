import { all, put, call, take, takeEvery } from 'redux-saga/effects';

import { ActionTypes } from '@actions/index';
import * as ServerSideApis from '@src/apis/ServerSideApis';
import { action as createAction } from '@actions/index';

export function* getTranslate(action) {
  try {
    const data = yield ServerSideApis.getTranslate(action.payload.locale);
    yield put(createAction(ActionTypes.GET_LOCALE_SUCCESS, {
      locale: data.locale
    }));
  } catch (err) {
    // todos
  }
}

export default function* translateSaga () {  
  yield all([
    takeEvery(ActionTypes.GET_LOCALE, getTranslate)
  ]);
}
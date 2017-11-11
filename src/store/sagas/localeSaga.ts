import { all, put, call, take, takeEvery } from 'redux-saga/effects';

import * as ServerSideApi from '@src/apis/ServerSideApi';
import ActionType from '@actions/ActionType';
import Action from '@actions/Action';

export function* getTranslate(action) {
  try {
    const data = yield ServerSideApi.getTranslate(action.payload.locale);
    yield put(Action.GET_LOCALE_SUCCESS({
      locale: data.locale,
    }));
  } catch (err) {
    // todos
  }
}

export default function* translateSaga() {
  yield all([
    takeEvery(ActionType.GET_LOCALE, getTranslate),
  ]);
}

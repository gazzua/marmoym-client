import { all, put, call, take, takeEvery } from 'redux-saga/effects';

import ActionTypes from '@src/store/actions/ActionTypes';
import * as MarmoymApis from '@src/apis/MarmoymApis';

export function* getDefinitions(action) {
  try {
    const payload = yield MarmoymApis.getDefinitions(action.payload.termLabel);
    yield put({ type: ActionTypes.GET_DEFINITIONS_SUCCESS, ...payload });
  } catch (err) {
    // todos
  }
}

export default function* definitionSaga () {  
  yield all([
    takeEvery(ActionTypes.GET_DEFINITIONS, getDefinitions)
  ]);
}
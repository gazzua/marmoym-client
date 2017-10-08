import { all, put, call, take, takeEvery } from 'redux-saga/effects';

import ActionTypes from '@src/store/actions/ActionTypes';
import * as MarmoymApis from '@src/apis/MarmoymApis';

export function* getDefinitions(action) {
  const payload = yield MarmoymApis.getDefinitions();
  yield put({ type: ActionTypes.GET_DEFINITIONS_SUCCESS, payload });
}

export default function* definitionSaga () {  
  yield all([
    takeEvery(ActionTypes.GET_DEFINITIONS, getDefinitions)
  ]);
}
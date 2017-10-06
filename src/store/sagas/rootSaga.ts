import { all, put, call, take, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import ActionTypes from '@src/actions/ActionTypes';
import definitionSaga from './definitionSaga';

export function* incrementAsync() {
  console.log(123, 11);
  const a = yield new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve('power');
    }, 1000);
  });
  yield put({ type: 'INCREMENT', payload: a })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery(ActionTypes.GET_DEFINITIONS, incrementAsync)
}

export default function* rootSaga() {
  console.log("Starting up the root saga!");

  yield [
    definitionSaga()
  ]
}
import { all, put, call, take, takeEvery } from 'redux-saga/effects';

import ActionType from '@src/store/actions/ActionType';
import definitionSaga from './definitionSaga';
import userSaga from './userSaga';
import localeSaga from './localeSaga';

export default function* rootSaga() {
  console.log('Starting up the root saga!');

  yield [
    definitionSaga(),
    userSaga(),
    localeSaga(),
  ]
}

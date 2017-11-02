import { all, put, call, take, takeEvery } from 'redux-saga/effects';

import ActionTypes from '@src/store/actions/ActionTypes';
import definitionSaga from './definitionSaga';
import localeSaga from './localeSaga';

export default function* rootSaga() {
  console.log('Starting up the root saga!');

  yield [
    definitionSaga(),
    localeSaga(),
  ];
}

import { all, put, call, take, takeEvery, select } from 'redux-saga/effects';

import Action from '@actions/Action';
import ActionType from '@constants/ActionType';
import * as MarmoymApis from '@src/apis/MarmoymApis';
import { selectToFetch } from '@selectors/definitionSelector';

export function* getDefinitionIds(action) {
  try {
    const data = yield MarmoymApis.getDefinitionIds(action.payload);
    yield put(Action.GET_DEFINITION_IDS_SUCCESS({
      defIds: data.defIds,
    }));

    const toFetch = yield select(selectToFetch);
    yield put(Action.GET_DEFINITIONS({
      toFetch,
    }));
  } catch (err) {
    // todo
  }
}

export function* getDefinitions(action) {
  try {
    const { toFetch } = action.payload;
    const data = yield MarmoymApis.getDefinitions({
      defIds: toFetch,
    });

    yield put(Action.GET_DEFINITIONS_SUCCESS({
      ...data,
    }));
  } catch (err) {
    // todos
  }
}

export function* search(action) {
  try {
    const { query } = action.payload;
    const data = yield MarmoymApis.search({
      query,
    });

    yield put(Action.GET_DEFINITION_IDS_SUCCESS({
      defIds: data.defIds,
    }));

    const toFetch = yield select(selectToFetch);
    yield put(Action.GET_DEFINITIONS({
      toFetch,
    }));
  } catch (err) {
    //
  }
}

export default function* definitionSaga() {
  yield all([
    takeEvery(ActionType.GET_DEFINITION_IDS, getDefinitionIds),
    takeEvery(ActionType.GET_DEFINITIONS, getDefinitions),
    takeEvery(ActionType.SEARCH, search),
  ]);
}

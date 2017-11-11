import { all, put, call, take, takeEvery, select } from 'redux-saga/effects';

import Action from '@actions/Action';
import ActionType from '@actions/ActionType';
import * as MarmoymApis from '@src/apis/MarmoymApis';
import { selectFetchNeeded } from '@selectors/definitionSelector';

export function* getDefinitionIds(action) {
  try {
    const data = yield MarmoymApis.getDefinitionIds(action.payload);
    yield put(Action.GET_DEFINITION_IDS_SUCCESS({
      defIds: data.defIds,
    }));

    const fetchNeeded = yield select(selectFetchNeeded);
    yield put(Action.GET_DEFINITIONS({
      fetchNeeded,
    }));
  } catch (err) {
    // todo
  }
}

export function* getDefinitions(action) {
  try {
    const { fetchNeeded } = action.payload;
    const data = yield MarmoymApis.getDefinitions({
      defIds: fetchNeeded.toJS(),
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

    const fetchNeeded = yield select(selectFetchNeeded);
    yield put(Action.GET_DEFINITIONS({
      fetchNeeded,
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

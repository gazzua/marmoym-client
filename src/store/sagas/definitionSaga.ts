import { all, put, call, take, takeEvery, select } from 'redux-saga/effects';

import { ActionTypes, action as createAction } from '@actions/index';
import * as MarmoymApis from '@src/apis/MarmoymApis';
import { selectFetchNeeded } from '@selectors/definitionSelector';

export function* getDefinitionIds(action) {
  try {
    const data = yield MarmoymApis.getDefinitionIds(action.payload)
    yield put(createAction(ActionTypes.GET_DEFINITION_IDS_SUCCESS, {
      defIds: data.payload.defIds
    }));
    
    const fetchNeeded = yield select(selectFetchNeeded);
    yield put(createAction(ActionTypes.GET_DEFINITIONS, {
      fetchNeeded 
    }));
  } catch (err) {
    // todo
  }
}

export function* getDefinitions(action) {
  try {
    const { fetchNeeded } = action.payload;
    const data = yield MarmoymApis.getDefinitions({
      defIds: fetchNeeded.toJS()
    });

    yield put(createAction(ActionTypes.GET_DEFINITIONS_SUCCESS, {
      ...data.payload
    }));
  } catch (err) {
    // todos
  }
}

export default function* definitionSaga () {  
  yield all([
    takeEvery(ActionTypes.GET_DEFINITION_IDS, getDefinitionIds),
    takeEvery(ActionTypes.GET_DEFINITIONS, getDefinitions)
  ]);
}
import ActionType from '@constants/ActionType';
import * as MarmoymApis from '@src/apis/MarmoymApis';
import { selectToFetch } from '@selectors/definitionSelector';
import * as Immutable from 'immutable';

const dummyDef = {
  created_at: 20,
  downvote: 10,
  id: 1,
  label: '기모찌',
  origins: ['power', '111origin'],
  poss: ['동사'],
  term_id: 2,
  updated_at: Date.now(),
  upvote: 2,
  usages: ['blabla', 'bleble'],
  user_id: 3,
  username: 'username123123',
};

const TermRecord = {
  created_at: 0,
  id: 0,
  label: 'label',
  roman: 'roman',
  updated_at: 0,
};

const searchParam = {
  query: '',
}

export function getDefinitions ({
  page,
}) {
  return (dispatch, getState) => {
    dispatch({
      payload: arguments[0],
      type: ActionType.GET_DEFINITIONS,
    })

    return MarmoymApis.getDefinitions({
      page,
    })
      .then((res) => {
        dispatch({
          payload: {
            definitions: [ dummyDef ],
          },
          type: ActionType.GET_DEFINITIONS_SUCCESS,
        })
      })
      .catch((res) => {
        dispatch({
          type: ActionType.GET_DEFINITIONS_ERROR,
        });
      })
  }
}

export const search = (searchParam) => {
  return (dispatch, getState) => {
    dispatch({
      type:ActionType.SEARCH,
    });

    return MarmoymApis.search(searchParam.query)
      .then((res) => {
        dispatch({
          type: ActionType.GET_DEFINITION_IDS_SUCCESS({
            defIds: res.defIds
          })
        })
        // todo : dispatch next action
      })
      .catch((res) => {
        // todo
      })
  }
}
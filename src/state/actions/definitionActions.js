import ActionType from '@constants/ActionType';
import * as MarmoymApis from '@src/apis/MarmoymApis';
import { selectToFetch } from '@selectors/definitionSelector';

const getDefinitionIdsParam = {
  defIds: [],
}

const getDefinitionsParam = {
  toFetch: [],
}

const searchParam = {
  query: '',
}

export const getDefinitionIds = (getDefinitionIdsParam) => {
  return (dispatch, getState) => {
    dispatch({
      type: ActionType.GET_DEFINITION_IDS,
    });

    return MarmoymApis.getDefinitionIds({
      defIds: getDefinitionIdsParam.defIds,
    })
      .then((res) => {
        dispatch({
          defIds: res.defIds,
          type: ActionType.GET_DEFINITION_IDS_SUCCESS,
        });

        // todo : dispatch next action
        const toFetch = select(selectToFetch);
        return () => {
          dispatch({
            payload: toFetch,
            type: ActionType.GET_DEFINITIONS,
          });
        };
      })
      .catch((res) => {
        dispatch({
          type: ActionType.GET_DEFINITION_IDS_ERROR,
        });
      });

  }
};

export const getDefinitions = (getDefinitionsParam) => {
  return (dispatch, getState) => {
    dispatch({
      type: ActionType.GET_DEFINITIONS,
    });

    return MarmoymApis.getDefinitions({
      defIds: getDefinitionIdsParam.toFetch,
    })
      .then((res) => {
        dispatch({
          type: ActionType.GET_DEFINITIONS_SUCCESS,
        });
      })
      .catch((res) => {
        dispatch({
          type: ActionType.GET_DEFINITIONS_ERROR,
        });
      });
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
import { selectAxiosPayload, selectAxiosError } from '@modules/Axios';
import ActionType from '@constants/ActionType';
import MarmoymAPI from '@apis/MarmoymAPI/MarmoymAPI';
import { selectToFetch } from '@selectors/definitionSelector';
import Logger from '@modules/Logger';

const logger = new Logger('action');

export function requestGetDefinitions({
  componentId,
  page,
}) {
  return async (dispatch, getState) => {
    dispatch({
      payload: arguments[0],
      type: ActionType.REQUEST_GET_DEFINITIONS,
    });

    try {
      const result = await MarmoymAPI.getDefinitions({
        page,
      });

      dispatch({
        payload: {
          componentId,
          ...selectAxiosPayload(result),
        },
        type: ActionType.REQUEST_GET_DEFINITIONS_SUCCESS,
      });
    } catch (err) {
      Logger.error(err);
      dispatch({
        error: selectAxiosError(err),
        type: ActionType.REQUEST_GET_DEFINITIONS_ERROR,
      });
    }
  }
};

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
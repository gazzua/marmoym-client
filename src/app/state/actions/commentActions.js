import { selectAxiosPayload, selectAxiosError } from '@modules/Axios';
import ActionType from '@constants/ActionType';
import MarmoymAPI from '@apis/MarmoymAPI/MarmoymAPI';
import Logger from '@modules/Logger';

const logger = new Logger('action');

export function requestGetComments({
  defId,
}) {
  return async (dispatch, getState) => {
    dispatch({
      type: ActionType.REQUEST_GET_COMMENTS,
    });

    try {
      const result = await MarmoymAPI.getComments({
        defId,
      });

      dispatch({
        payload: {
          ...selectAxiosPayload(result),
        },
        type: ActionType.REQUEST_GET_COMMENTS_SUCCESS,
      });
    } catch (err) {
      Logger.error(err);
      dispatch({
        error: selectAxiosError(err),
        type: ActionType.REQUEST_GET_COMMENTS_ERROR,
      });
    }
  }
};

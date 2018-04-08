import ActionType from '@constants/ActionType';
import * as ServerSideApi from '@src/apis/ServerSideApi';

const getLocaleParam = {
  locale : '',
}

export const getLocale = (getLocaleParam) => {
  return (dispatch, getState) => {
    dispatch({
      type: ActionType.GET_LOCALE,
    });

    return ServerSideApi.getLocale(getLocaleParam.locale)
      .then((res) => {
        dispatch({
          type: ActionType.GET_LOCALE_SUCCESS,
          payload: res.locale,
        });
      })
      .catch((error) => {
        dispatch({
          type: ActionType.GET_LOCALE_ERROR,
        });
      })
  }
}
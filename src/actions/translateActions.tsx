import axios from 'axios';

import apis from '@src/apis'
import ActionType from './ActionType';

export const requestGetTranslate = (locale) => (dispatch, getState) => {
  dispatch({
    type: ActionType.GET_TRANSLATE
  });

  axios.get(`${apis.GET_TRANSLATE}/${locale}`)
    .then(res => {
      dispatch(requestGetTranslateSuccess(res.data))
    })
    .catch(err => {
      // dispatch(requestGetTermsError(err))
    });
};

export const requestGetTranslateSuccess = (translate) => {
  return {
    type: ActionType.GET_TRANSLATE_SUCCESS,
    payload: translate
  }
}
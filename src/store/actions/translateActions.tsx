import axios from 'axios';

import ActionTypes from './ActionTypes';

export const requestGetTranslate = (locale) => (dispatch, getState) => {
  dispatch({
    type: ActionTypes.GET_TRANSLATE
  });

  // axios.get(`${apis.GET_TRANSLATE}/${locale}`)
  //   .then(res => {
  //     dispatch(requestGetTranslateSuccess(res.data))
  //   })
  //   .catch(err => {
  //     // dispatch(requestGetTermsError(err))
  //   });
};

export const requestGetTranslateSuccess = (translate) => {
  return {
    type: ActionTypes.GET_TRANSLATE_SUCCESS,
    payload: translate
  }
}
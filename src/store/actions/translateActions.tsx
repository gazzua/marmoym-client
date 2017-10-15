import axios from 'axios';

import ActionTypes from './ActionTypes';

export const requestGetTranslate = (locale) => (dispatch, getState) => {
  dispatch({
    type: ActionTypes.GET_LOCALE
  });
};

export const requestGetTranslateSuccess = (translate) => {
  return {
    type: ActionTypes.GET_LOCALE_SUCCESS,
    payload: translate
  }
}
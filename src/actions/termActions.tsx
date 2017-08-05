import axios from 'axios';

import apis from '../apis'
import ActionType from '../constants/ActionType';

const requestGetTerms = () => (dispatch, getState) => {
  dispatch({
    type: ActionType.GET_TERMS
  })

  axios.put(apis.ADD_TERM)
    .then(res => {
      dispatch(requestGetTermsSuccess(res.data))
    })
    .catch(err => {
      dispatch(requestGetTermsError(err))
    })
}

const requestGetTermsSuccess = (terms) => ({
  type: ActionType.GET_TERMS_SUCCESS,
  terms
})

const requestGetTermsError = (err) => ({
  type: ActionType.GET_TERMS_ERROR
})

export default {
  requestGetTerms
}
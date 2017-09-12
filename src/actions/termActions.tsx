import axios from 'axios';
import * as Immutable from 'immutable';

import apis from '../apis'
import ActionType from '../constants/ActionType';
import Definition from '../models/Definition';

const definitions = Immutable.List([
  new Definition({ 
    term: '실화니?',
    label: '실화니?의 뜻',
    pos: '명사',
    usage: '민수 차 산거 실화니?',
    media: 'link/to/image',
    origin: '아프리카 철구 방송',
    badges: ['hot', 'top']
  }),
  new Definition({ 
    term: '실화니?',
    label: '실화니?의 뜻',
    pos: '명사',
    usage: '민수 차 산거 실화니?',
    media: 'link/to/image',
    origin: '아프리카 철구 방송',
    badges: ['hot', 'top']
  })
]);

const requestGetTerms = () => (dispatch, getState) => {
  dispatch({
    type: ActionType.GET_TERMS
  });

  dispatch(requestGetTermsSuccess(definitions));
  
  // TODO: later we transfer data via axios when API is ready.
  // axios.put(apis.ADD_TERM)
  //   .then(res => {
  //     console.log(1, res)
  //     dispatch(requestGetTermsSuccess(res.data))
  //   })
  //   .catch(err => {
  //     dispatch(requestGetTermsError(err))
  //   });
};

const requestGetTermsSuccess = (definitions) => ({
  type: ActionType.GET_TERMS_SUCCESS,
  payload: definitions
});

const requestGetTermsError = (err) => ({
  type: ActionType.GET_TERMS_ERROR
});

export default {
  requestGetTerms
}
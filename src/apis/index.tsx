const API_ROOT = 'http://10.16.29.127:4000/api/v1/'
const SS_ROOT = '/ss/';

const api = (str) => {
  return API_ROOT + str;
}

const ss = (str) => {
  return SS_ROOT + str;
}

export default {
  GET_TERMS: api('terms'),
  ADD_TERM: api('terms'),
  UPDATE_TERM: api('terms'),

  GET_TRANSLATE: ss('i18n')
}
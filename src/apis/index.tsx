const ROOT = 'http://10.16.29.127:4000/api/v1/'

const getUrl = (str) => {
  return ROOT + str
}

export default {
  GET_TERMS: getUrl('terms'),
  ADD_TERM: getUrl('terms'),
  UPDATE_TERM: getUrl('terms')
}
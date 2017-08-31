const ROOT = 'http://10.16.29.127:4000/api/v1/'

const resolveUrl = (str) => {
  return ROOT + str
}

export default {
  GET_TERMS: resolveUrl('terms'),
  ADD_TERM: resolveUrl('terms'),
  UPDATE_TERM: resolveUrl('terms')
}
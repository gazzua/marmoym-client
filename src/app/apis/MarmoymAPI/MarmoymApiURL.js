const ROOT = process.env.NODE_ENV === 'development' 
  ? `http://${window.location.hostname}:4001/api/v1`
  : `http://api.marmoym.com/api/v1`;

const MarmoymURL = {
  ADD_DEFINITION: `${ROOT}/newdefinitions`,
  GET_DEFINITIONS_IDS: `${ROOT}/definitions/ids`,
  GET_DEFINITIONS: `${ROOT}/definitions`,
  GET_DEFINITIONS_BY_ID: `${ROOT}/definitions/`,

  USERS_SIGNEDIN: `${ROOT}/session/new`,
  USERS_SIGNEDUP: `${ROOT}/users/new`,

  SEARCH: `${ROOT}/search`,
};

export default MarmoymURL;

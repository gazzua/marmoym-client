const ROOT = 'http://localhost:4001/api/v1/';

const MarmoymURL = {
  ADD_DEFINITION: `${ROOT}/newdefinitions`,
  GET_DEFINITIONS_IDS: `${ROOT}/definitions/ids`,
  GET_DEFINITIONS: `${ROOT}/definitions`,

  USERS_SIGNEDIN: `${ROOT}/session/new`,
  USERS_SIGNEDUP: `${ROOT}/users/new`,

  SEARCH: `${ROOT}/search`,
};

export default MarmoymURL;

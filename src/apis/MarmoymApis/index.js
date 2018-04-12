import axios from 'axios';

import { createPayloadSelector } from '../apiUtils';
import * as URL from './MarmoymApiURL';
import MarmoymApiError from '@models/Error/MarmoymApiError';

export function getDefinitions({
  page,
}) {
  return axios.post(URL.GET_DEFINITIONS, {
    ...arguments[0],
  })
    .then(createPayloadSelector(MarmoymApiError));
}

export function signInUser(email, password) {
  return axios.post(URL.USERS_SIGNEDIN, {
    email,
    password
  })
    .then(createPayloadSelector(MarmoymApiError));
}

export function signUpUser(email, password, username) {
  return axios.post(URL.USERS_SIGNEDUP, {
    email,
    password, 
    username,
  })
}

export function search(args) {
  return axios.get(URL.SEARCH, {
    params: {
      query: args.query,
    },
  })
    .then(createPayloadSelector(MarmoymApiError));
}

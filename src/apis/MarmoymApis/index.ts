import axios from 'axios';

import { createPayloadSelector } from '../apiUtils';
import * as URL from './MarmoymApiURL';
import MarmoymApiError from '@models/Error/MarmoymApiError';

export function getDefinitions(args) {
  return axios.post(URL.GET_DEFINITIONS, {
    ...args,
  })
    .then(createPayloadSelector(MarmoymApiError));
}

export function getDefinitionIds(args) {
  return axios.get(URL.GET_DEFINITIONS_IDS, {
    params: {
      ...args
    },
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

export function search(args) {
  return axios.get(URL.SEARCH, {
    params: {
      query: args.query,
    },
  })
    .then(createPayloadSelector(MarmoymApiError));
}

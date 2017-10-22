import axios from 'axios';

import * as URL from './MarmoymApiURL';
import { getPayload } from '../apiUtils';

export function getDefinitions(args) {
  return axios.post(URL.GET_DEFINITIONS, {
    ...args
  })
    .then(getPayload);
}

export function getDefinitionIds(args) {
  return axios.get(URL.GET_DEFINITION_IDS, {
    params: {
    }
  })
    .then(getPayload);
}

export function search(args) {
  return axios.get(URL.SEARCH, {
    params: {
      query: args.query
    }
  })
    .then(getPayload);
}
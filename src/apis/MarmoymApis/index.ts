import axios from 'axios';

import { getPayload } from '../apiUtils';
import * as URL from './MarmoymApiURL';

export function getDefinitions(args) {
  return axios.post(URL.GET_DEFINITIONS, {
    ...args,
  })
    .then(getPayload);
}

export function getDefinitionIds(args) {
  return axios.get(URL.GET_DEFINITIONS_IDS, {
    params: {},
  })
    .then(getPayload);
}

export function search(args) {
  return axios.get(URL.SEARCH, {
    params: {
      query: args.query,
    },
  })
    .then(getPayload);
}

import axios from 'axios';

import * as URL from './MarmoymApiURL';
import { getPayload } from '../apiUtils';

export function getDefinitions(request) {
  return axios.post(URL.GET_DEFINITIONS, {
    ...request
  })
    .then(getPayload);
}

export function getDefinitionIds(obj) {
  return axios.get(URL.GET_DEFINITION_IDS, {
    params: {
    }
  })
    .then(getPayload);
}
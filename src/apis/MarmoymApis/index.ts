import axios from 'axios';

import * as URL from './MarmoymApiURL';
import { getData } from '../apiUtils';

export function getDefinitions(request) {
  return axios.post(URL.GET_DEFINITIONS, {
    ...request
  })
    .then(getData);
}

export function getDefinitionIds(obj) {
  return axios.get(URL.GET_DEFINITION_IDS, {
    params: {
    }
  })
    .then(getData);
}
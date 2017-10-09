import axios from 'axios';

import * as URL from './MarmoymApiURL';

export function getDefinitions(termLabel) {
  return axios.get(URL.GET_DEFINITIONS, {
    params: {
      termLabel
    }
  })
    .then(res => {
      return res.data;
    })
}
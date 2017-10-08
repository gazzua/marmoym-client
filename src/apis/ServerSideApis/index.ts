import axios from 'axios';

import * as URL from './ServerSideApiURL';

export function getTranslate(locale) {
  return axios.get(`${URL.GET_TRANSLATE}/${locale}`)
  .then(res => {
    return res.data;
  })
  .catch(err => {
    return err;
  });
}
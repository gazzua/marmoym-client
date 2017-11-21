import axios from 'axios';

import { createPayloadSelector } from '../apiUtils';
import * as URL from './ServerSideApiURL';
import ErrorBase from '@models/Error/ErrorBase';

export function getLocale(locale) {
  return axios.get(`${URL.GET_LOCALE}/${locale}`)
  .then(createPayloadSelector(ErrorBase))
  .catch((err) => {
    console.error(err);
    return err;
  });
}

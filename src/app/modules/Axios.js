import axios from 'axios';

import { DEV_ENV } from '@utils/envUtils';
import HttpMethod from '@constants/HttpMethod';
import Logger from '@modules/Logger';

const logger = new Logger('axios');

const axiosInstance = (function configureAxios() {
  const axiosInstance = axios.create();
  axiosInstance.defaults.timeout = 7000;

  /**
   * Logging
   */
  DEV_ENV && axiosInstance.interceptors.request.use(req => {
    try {
      logger.axios(req.method, req.url, req.data);
    } catch (err) {
      logger.error(err);
    }
    return req;
  });
  return axiosInstance;
})();

export default axiosInstance;

export function send({
  data,
  method,
  options,
  url,
}) {
  return axiosInstance({
    data,
    method,
    url,
    withCredentials: true,
  });
};

export function selectAxiosPayload(res) {
  return res.data.payload;
};

export function selectAxiosError(err) {
  return err.response ? err.response.data : err.response;
};
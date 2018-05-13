import Axios from '@modules/Axios';
import HttpMethod from '@constants/HttpMethod';
import MarmoymApiError from '@models/Error/MarmoymApiError';
import URL from './MarmoymApiURL';

export default {
  getDefinitions: function ({
    page,
  }) {
    return Axios({
      data: arguments[0],
      method: HttpMethod.POST,
      url: URL.GET_DEFINITIONS,
      withCredential: true,
    });
  },

  signInUser: function ({
    email, password
  }) {
    return Axios({
      data: { email: arguments[0].email, password: arguments[0].password },
      method: HttpMethod.POST,
      url: URL.USERS_SIGNEDIN,
      withCredential: true,
    });
  },

  signUpUser: function ({
    email, password, username
  }) {
    return Axios({
      data: { email: arguments[0].email, password: arguments[0].password, username: arguments[0].username },
      method: HttpMethod.POST,
      url: URL.USERS_SIGNEDUP,
      withCredential: true,
    });
  },

  search(args) {
    return axios.get(URL.SEARCH, {
      params: {
        query: args.query,
      },
    })
      .then(createPayloadSelector(MarmoymApiError));
  }
}



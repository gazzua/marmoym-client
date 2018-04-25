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

  signInUser: function (email, password) {
    return axios.post(URL.USERS_SIGNEDIN, {
      email,
      password
    })
      .then(createPayloadSelector(MarmoymApiError));
  },

  signUpUser(email, password, username) {
    return axios.post(URL.USERS_SIGNEDUP, {
      email,
      password, 
      username,
    })
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



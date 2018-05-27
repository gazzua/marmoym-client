import Axios from '@modules/Axios';
import HttpMethod from '@constants/HttpMethod';
import MarmoymApiError from '@models/Error/MarmoymApiError';
import URL from './MarmoymApiURL';

export default {
  getComments: function({
    defId,
  }) {
    return Axios({
      data: arguments[0],
      method: HttpMethod.POST,
      url: URL.GET_COMMENTS,
      withCredential: true,
    });
  },

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
  
  getDefinitionsById: function ({
    defId,
  }) {
    return Axios({
      data: arguments[0],
      method: HttpMethod.POST,
      url: URL.GET_DEFINITIONS_BY_ID+defId,
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



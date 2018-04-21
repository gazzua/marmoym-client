import ActionType from '@constants/ActionType';
import MarmoymAPI from '@apis/MarmoymAPI/MarmoymAPI';

const UserSignInParam = {
  email: '',
  password: '',
}

const UserSignUpParam = {
  email: '',
  password: '',
  username: '',
}

export const requestSignInUser = (userSignInParam) => {
  return (dispatch, getState) => {
    dispatch({
      type: ActionType.REQUEST_SIGN_IN_USER,
    });

    return MarmoymApis.signInUser(userSignInParam.email, userSignInParam.password)
      .then((res) => {
        console.log(123, res);
        dispatch({
          type: ActionType.REQUEST_SIGN_IN_USER_SUCCESS,
        });
      })
      .catch((err) => {
        console.log(123, err);
        dispatch({
          type: ActionType.REQUEST_SIGN_IN_USER_ERROR,
          payload: '',
        });
      });

    // return MemenetApis.requestGetImpressions(brand)
    //   .then((res) => {
    //     dispatch({
    //       payload: selectData(res),
    //       type: ActionTypes.REQUEST_GET_IMPRESSIONS_SUCCESS,
    //     });
    //   })
    //   .catch(err => {
    //     Logger.error(err);
    //     dispatch({
    //       payload: {},
    //       type: ActionTypes.REQUEST_GET_IMPRESSIONS_ERROR,
    //     });
    //   });
  }
};

export const requestSignUpUser = (userSignUpParam) => {
  return (dispatch, getState) => {
    dispatch({
      type: ActionType.REQUEST_SIGN_UP_USER,
    });

    return MarmoymApis.signUpUser(userSignUpParam.email, userSignUpParam.password, userSignUpParam.username)
      .then((res) => {
        console.log(123, res);
        dispatch({
          type: ActionType.REQUEST_SIGN_UP_USER_SUCCESS,
        });
      })
      .catch((err) => {
        console.log(123, err);
        dispatch({
          type: ActionType.REQUEST_SIGN_UP_USER_ERROR,
          payload: '',
        });
      });
  }
};
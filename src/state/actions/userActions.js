import ActionType from '@constants/ActionType';
import * as MarmoymApis from '@src/apis/MarmoymApis';

const UserSignInParam = {
  email: '',
  password: '',
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
import { selectAxiosPayload, selectAxiosError } from '@modules/Axios';
import ActionType from '@constants/ActionType';
import MarmoymAPI from '@apis/MarmoymAPI/MarmoymAPI';
import Logger from '@modules/Logger';

const UserSignInParam = {
  email: '',
  password: '',
}

const UserSignUpParam = {
  email: '',
  password: '',
  username: '',
}

export function requestSignInUser({
  email,
  password,
}) {
  return async (dispatch, getState) => {
    dispatch({
      type: ActionType.REQUEST_SIGN_IN_USER,
    });

    try {
      const result = await MarmoymAPI.signInUser({
        email,
        password,
      });

      dispatch({
        payload: {
          ...selectAxiosPayload(result),
        },
        type: ActionType.REQUEST_SIGN_IN_USER_SUCCESS,
      });

      return {
        msg: 'success',
      };
    } catch (err) {
      Logger.error(err);
      dispatch({
        error: selectAxiosError(err),
        type: ActionType.REQUEST_SIGN_IN_USER_ERROR,
      });
    }
  }
};

export function requestSignUpUser({
  email,
  password,
  username,
}) {
  return async (dispatch, getState) => {
    dispatch({
      type: ActionType.REQUEST_SIGN_UP_USER
    });

    try {
      const result = await MarmoymAPI.signUpUser({
        email, password, username,
      });

      dispatch({
        payload: {
          ...selectAxiosPayload(result),
        },
        type: ActionType.REQUEST_SIGN_UP_USER_SUCCESS,
      });

      return {
        msg: 'success',
      };
    } catch (err) {
      Logger.error(err);
      dispatch({
        error: selectAxiosError(err),
        type: ActionType.REQUEST_SIGN_UP_USER_ERROR,
      });
    }
  }
};

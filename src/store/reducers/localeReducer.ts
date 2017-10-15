import ActionTypes from '@actions/ActionTypes';

const initialState = {
  locale: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_LOCALE_SUCCESS:
      return {
        ...state,
        locale: action.payload.locale
      }
      
    default:
      return state;
  }
};  
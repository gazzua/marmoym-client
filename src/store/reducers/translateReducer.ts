import ActionTypes from '@actions/ActionTypes';

const initialState = {
}

export default (state = initialState, action) => {
  // console.log('translateReducer', action.type, action)
  switch (action.type) {
    case ActionTypes.GET_TRANSLATE_SUCCESS:
      return {
        ...state,
        trans: action.payload
      }
      
    default:
      return state;
  }
};  
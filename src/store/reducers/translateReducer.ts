import ActionTypes from '@actions/ActionTypes';

const initialState = {
  translate: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_TRANSLATE_SUCCESS:
      return {
        ...state,
        translate: action.payload.translate
      }
      
    default:
      return state;
  }
};  
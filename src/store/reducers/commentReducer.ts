import ActionTypes from '@src/store/actions/ActionTypes';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TERM: 
      return {
        ...state,
        termAdded: action.payload
      }
    case ActionTypes.ADD_TERM_SUCCESS: 
      return {
        ...state,
        termAdded: action.payload
      }
    default:
      return state;
  }
};
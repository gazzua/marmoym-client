import ActionTypes from '@src/store/actions/ActionTypes';

const initialState = {};

export default (state = initialState, action) => {
  console.log(action.type, action)
  switch (action.type) {
    case ActionTypes.GET_TERMS:
      return {
        ...state,
      };
    case ActionTypes.GET_TERMS_SUCCESS:
      return {
        ...state,
        definitions: action.payload
      };  
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
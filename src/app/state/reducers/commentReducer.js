import ActionType from '@constants/ActionType';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_TERM:
      return {
        ...state,
        termAdded: action.payload,
      };
    case ActionType.ADD_TERM_SUCCESS:
      return {
        ...state,
        termAdded: action.payload,
      };
    case ActionType.REQUEST_GET_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload.comments,
      }
    default:
      return state;
  }
};

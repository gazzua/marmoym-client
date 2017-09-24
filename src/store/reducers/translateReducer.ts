import ActionType from '@src/actions/ActionType';

const initialState = {
}

export default (state = initialState, action) => {
  // console.log('translateReducer', action.type, action)
  switch (action.type) {
    case ActionType.GET_TRANSLATE_SUCCESS:
      return {
        ...state,
        trans: action.payload
      }
      
    default:
      return state;
  }
};  
import ActionType from '@constants/ActionType';

const initialState = {
  locale: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_LOCALE_SUCCESS:
      return {
        ...state,
        locale: action.payload,
      };

    default:
      return state;
  }
};

import * as Immutable from 'immutable';

import ActionType from '@constants/ActionType';
import Definition from '@src/models/data/Definition';

function onSucceed({
  action,
  factory,
  state,
}) {
  return {
    ...state,
    definitions: {
      ...state.definitions,
      [action.payload.componentId]: factory(action.payload.definitions),
    },
  };
};

const initialState = {
  definitions: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUEST_GET_DEFINITIONS_SUCCESS:
      return onSucceed({
        action,
        factory: Definition.ofMany,
        state,
      });
    case ActionType.ADD_DEFINITION:
      return {
        ...state,
        termAdded: action.payload,
      };
    case ActionType.ADD_DEFINITION_SUCCESS:
      return {
        ...state,
        termAdded: action.payload,
      };
    case ActionType.REQUEST_GET_DEFINITIONS_BY_ID_SUCCESS:
      return {
        ...state,
        definition: action.payload.definition,
      };
    case ActionType.REMOVE_DEFINITION:
      return {
        ...state,
      };
    default:
      return state;
  }
};

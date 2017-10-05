import ActionType from '@src/actions/ActionType';

import { List } from 'immutable';
import Definition from '@src/models/Definition';
import { DefinitionType } from './StoreStateTypes'; 

const initialState = {
  definitions: List()
};

export default (state: DefinitionType = initialState, action) => {
  console.log(action.type, action)
  const a: DefinitionType = action.payload;
  List()

  let newDefinitions;
  switch (action.type) {
    case ActionType.GET_DEFINITIONS:
      return {
        ...state,
      };
    case ActionType.GET_DEFINITIONS_SUCCESS:
      newDefinitions = List(action.payload.map(definition => new Definition(definition)))
      return {
        ...state,
        definitions: newDefinitions
      };  
    case ActionType.ADD_DEFINITION: 
      return {
        ...state,
        termAdded: action.payload
      }
    case ActionType.ADD_DEFINITION_SUCCESS: 
      return {
        ...state,
        termAdded: action.payload
      }
    case ActionType.REMOVE_DEFINITION:
      return {
        ...state
      }
    case ActionType.TEMP:
      const newDefinition = new Definition(action.payload);
      newDefinitions = state.definitions.push(newDefinition);
      return {
        ...state,
        definitions: newDefinitions
      }
    default:
      return state;
  }
};
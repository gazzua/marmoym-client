import { List } from 'immutable';

import ActionTypes from '@src/store/actions/ActionTypes';
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
    case ActionTypes.GET_DEFINITIONS:
      return {
        ...state,
      };
    case ActionTypes.GET_DEFINITIONS_SUCCESS:
      if (!action.payload.map) {
        return {
          ...state
        }
      }
      newDefinitions = List(action.payload.map(definition => new Definition(definition)))
      return {
        ...state,
        definitions: newDefinitions
      };  
    case ActionTypes.ADD_DEFINITION: 
      return {
        ...state,
        termAdded: action.payload
      }
    case ActionTypes.ADD_DEFINITION_SUCCESS: 
      return {
        ...state,
        termAdded: action.payload
      }
    case ActionTypes.REMOVE_DEFINITION:
      return {
        ...state
      }
    case ActionTypes.TEMP:
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
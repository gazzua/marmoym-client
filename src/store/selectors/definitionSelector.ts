import { createSelector } from 'reselect';
import * as Immutable from 'immutable';

export const selectDefinitions = state => state.definitionReducer.definitions;

export const selectFetchNeeded = state => state.definitionReducer.fetchNeeded;

export const selectTerms = state => state.definitionReducer.terms;

export const selectDefinitionsInDisplay = state => state.definitionReducer.inDisplay;

export function selectDefIds(state) {
  return state.definitionReducer.definitions.map((elem) => {
    return elem.get('id');
  });
}

export function selectCombinedDefinitionsInDisplay(state) {
  const selector = createSelector(
    [selectDefinitionsInDisplay, selectDefinitions, selectTerms],
    (inDisplay, Definitions, Terms) => {
      // console.log(123, inDisplay, Definitions, Terms);
      // console.log(123111, a);
      // console.log(123, newDefinitions);
      let newDefinitions = Definitions.filter((Definition, id) => {
        return inDisplay.includes(+id);
      }).map((Definition, id) => {
        return Definition.set('$term', Terms.get(+Definition.get('term_id')))
      });
      // console.log(12311, newDefinitions.toJS());
    }
  )
  return selector(state);
}
  
export function selectDefinition(state, defId) {
  return createSelector(
    [selectDefinitions],
    (definitions) => {
      // console.log(12300, definitions);
      return "getDefinition"
    });
};
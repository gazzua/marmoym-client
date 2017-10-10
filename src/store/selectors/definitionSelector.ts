import { createSelector } from 'reselect';

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
    (inDisplay, definitions, terms) => {
      console.log(123, inDisplay, definitions, terms);
      return 'power';
    }
  )
  return selector(state);
}
  
export function selectDefinition(state, defId) {
  return createSelector(
    [selectDefinitions],
    (definitions) => {
      console.log(12300, definitions);
      return "getDefinition"
    });
};
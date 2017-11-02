import * as Immutable from 'immutable';
import { createSelector } from 'reselect';

export const selectDefinitions = (state) => state.definitionReducer.definitions;

export const selectFetchNeeded = (state) => state.definitionReducer.fetchNeeded;

export const selectTerms = (state) => state.definitionReducer.terms;

export const selectUsers = (state) => state.userReducer.users;

export const selectDefinitionsInDisplay = (state) => state.definitionReducer.inDisplay;

export function selectDefIds(state) {
  return state.definitionReducer.definitions.map((elem) => {
    return elem.get('id');
  });
}

export function selectCombinedDefinitionsInDisplay(state) {
  const selector = createSelector(
    [selectDefinitionsInDisplay, selectDefinitions, selectTerms, selectUsers],
    (inDisplay, Definitions, Terms, Users) => {
      const newDefinitions = Definitions.filter((Definition, id) => {
        return inDisplay.includes(+id);
      }).map((Definition, id) => {
        return Definition
          .set('$user', Users.get(Definition.get('user_id').toString()))
          .set('$term', Terms.get(Definition.get('term_id').toString()));
      });
      return newDefinitions;
    },
  );
  return selector(state);
}

export function selectDefinition(state, defId) {
  return createSelector(
    [selectDefinitions],
    (definitions) => {
      return 'getDefinition';
    });
}

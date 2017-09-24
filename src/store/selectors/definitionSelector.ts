import { createSelector } from 'reselect';

export const selectDefinitions = state => state.definitionReducer.definitions;

export const selectDefinition = (state, defId) => {
  return createSelector(
    [selectDefinitions],
    (definitions) => {
      // defId
      return "getDefinition"
    });
};
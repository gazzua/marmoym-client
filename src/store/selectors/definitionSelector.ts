import { createSelector } from 'reselect';

export const selectDefinitions = state => state.definitionReducer.definitions;

export const getDefId = (state, props) => props.defId;

export const makeSelectDefinition = () => {
  return createSelector(
    [selectDefinitions, getDefId],
    (definitions, defId) => {
      return "getDefinition"
    });
};
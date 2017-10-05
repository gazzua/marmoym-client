import { createSelector } from 'reselect';

export const selectDefinitions = state => state.definitionReducer.definitions;

export const selectDefIds = state => {
  return state.definitionReducer.definitions.map((elem) => {
    console.log(123, elem);
    return elem.get('id')
  });
}
  

export const selectDefinition = (state, defId) => {
  return createSelector(
    [selectDefinitions],
    (definitions) => {
      console.log(12300, definitions);
      return "getDefinition"
    });
};
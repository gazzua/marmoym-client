import { createSelector } from 'reselect';

export const selectComments = state => state.commentReducer.comments;

// export const makeselectComments = () => {
//   return createSelector(
//     [],
//     () => {

//     }
//   )
// };
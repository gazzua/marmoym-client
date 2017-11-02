import { createSelector } from 'reselect';

export const selectComments = (state) => state.commentReducer.comments;

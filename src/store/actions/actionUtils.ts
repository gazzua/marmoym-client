import ActionTypes from './ActionTypes';

export function createAction(type, payload?) {
  return {
    type: ActionTypes[type],
    payload: payload
  };
}
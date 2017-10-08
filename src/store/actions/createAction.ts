import ActionTypes from './ActionTypes';

export default function createAction(type, payload?) {
  return {
    type: ActionTypes[type],
    payload: payload
  };
}
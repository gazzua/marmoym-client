import ActionTypes from './ActionTypes';

export interface Payload {
  [key: string]: any
}

export default function createAction(type: ActionTypes, payload?: Payload) {
  if (typeof(payload) !== 'object') {
    throw new Error();
  }

  return {
    type,
    payload: payload
  };
}
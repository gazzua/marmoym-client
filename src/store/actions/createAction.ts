import ActionTypes from './ActionTypes';

import { Payload } from './ActionTypeDefinitions';

export default function createAction(type: ActionTypes, payload?: Payload) {
  if (typeof(payload) !== 'object') {
    throw new Error();
  }

  return {
    type,
    payload: payload
  };
}
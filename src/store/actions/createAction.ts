import ActionType from './ActionType';

export interface Payload {
  [key: string]: any;
}

export default function createAction(type, payload?: Payload) {
  if (typeof(payload) !== 'object') {
    throw new Error();
  }

  return {
    payload,
    type,
  };
}

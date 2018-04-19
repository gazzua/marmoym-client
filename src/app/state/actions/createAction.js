import ActionType from './ActionType';

export default function createAction(type, payload) {
  if (typeof(payload) !== 'object') {
    throw new Error();
  }

  return {
    payload,
    type,
  };
}

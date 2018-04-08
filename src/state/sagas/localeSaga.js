import { all, put, call, take, takeEvery } from 'redux-saga/effects';

import * as ServerSideApi from '@src/apis/ServerSideApi';
import ActionType from '@constants/ActionType';
import Action from '@actions/Action';

// deprecated =============================================
// export function* getLocale(action) {
//   try {
//     const data = yield ServerSideApi.getLocale(action.payload.locale);
//     yield put(Action.GET_LOCALE_SUCCESS({
//       locale: data.locale,
//     }));
//   } catch (err) {
//     // todos
//   }
// }

// export default function* localeSaga() {
//   yield all([
//     takeEvery(ActionType.GET_LOCALE, getLocale),
//   ]);
// }

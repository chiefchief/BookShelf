import {all, put, takeLatest} from 'redux-saga/effects';
import {INITIAL_GLOBAL} from './__proto__';
import {resetBooks} from './books';
import {resetUser} from './user';

enum _globalTypes {
  LOG_OUT = '[_global] LOG_OUT',
  SET_LOADER = '[_global] SET_LOADER',
  RESET_GLOBAL = '[_global] RESET_GLOBAL',
}

const initialstate = new INITIAL_GLOBAL();

export default (state = initialstate, action: any) => {
  switch (action.type) {
    case _globalTypes.SET_LOADER:
      return new INITIAL_GLOBAL({...state, loader: action.loader});
    case _globalTypes.RESET_GLOBAL:
      return initialstate;
    default:
      return state;
  }
};

export const logOut = () => ({type: _globalTypes.LOG_OUT});
export const setLoader = (loader: boolean) => ({loader, type: _globalTypes.SET_LOADER});
export const resetGlobal = () => ({type: _globalTypes.RESET_GLOBAL});

export function* watch_global() {
  yield takeLatest(_globalTypes.LOG_OUT, logOutAsync);
}

export function* logOutAsync() {
  yield all([put(resetUser()), put(resetBooks())]);
}

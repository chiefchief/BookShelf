import {all, put, takeLatest} from 'redux-saga/effects';
import {resetBooks} from './books';
import {resetUser} from './user';
import {INITIAL_GLOBAL} from './__proto__';

const LOG_OUT = '[_persisted] LOG_OUT';

const SET_LOADER = '[_global] SET_LOADER';
const RESET_GLOBAL = '[_global] RESET_GLOBAL';

const initialstate = new INITIAL_GLOBAL();

export default (state = initialstate, action: any) => {
  switch (action.type) {
    case SET_LOADER:
      return new INITIAL_GLOBAL({...state, loader: action.loader});
    case RESET_GLOBAL:
      return initialstate;
    default:
      return state;
  }
};

export const logOut = () => ({type: LOG_OUT});
export const setLoader = (loader: boolean) => ({loader, type: SET_LOADER});
export const resetGlobal = () => ({type: RESET_GLOBAL});

export function* watch_global() {
  yield takeLatest(LOG_OUT, logOutAsync);
}

export function* logOutAsync() {
  yield all([put(resetUser()), put(resetBooks())]);
}

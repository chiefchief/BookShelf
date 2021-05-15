import {all} from 'redux-saga/effects';
import {watch_global} from './_global';
import {watchBooks} from './books';

// ADD IMPORT

export default function* rootSaga() {
  yield all([
    watch_global(),
    watchBooks(),
    // ADD WATCHER
  ]);
}

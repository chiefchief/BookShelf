import {combineReducers} from 'redux';
import _global from './_global';
import user from './user';
import books from './books';
// ADD IMPORT

const rootReducer = combineReducers({
  _global,
  user,
  books,
  // ADD NEW REDUCER
});

export type TAppState = ReturnType<typeof rootReducer>;
export default rootReducer;

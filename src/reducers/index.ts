import {combineReducers} from 'redux';
import _global from './_global';
import books from './books';
import user from './user';

// ADD IMPORT

const rootReducer = combineReducers({
  _global,
  user,
  books,
  // ADD NEW REDUCER
});

export type TAppState = ReturnType<typeof rootReducer>;
export default rootReducer;

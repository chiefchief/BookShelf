import {combineReducers} from 'redux';
import _global from './_global';
import _persisted from './_persisted';
// ADD IMPORT

const rootReducer = combineReducers({
  _global,
  _persisted,
  // ADD NEW REDUCER
});

export type TAppState = ReturnType<typeof rootReducer>;
export default rootReducer;

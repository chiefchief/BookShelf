import {INITIAL_USER} from './__proto__';

const SET_USER = '[user] SET_USER';
const RESET_USER = '[user] RESET_USER';

const initialstate = new INITIAL_USER();

export default (state = initialstate, action: any) => {
  switch (action.type) {
    case SET_USER:
      return new INITIAL_USER({...state, ...action.data});
    case RESET_USER:
      return initialstate;
    default:
      return state;
  }
};

export const setUser = (data: any) => ({data, type: SET_USER});
export const resetUser = () => ({type: RESET_USER});

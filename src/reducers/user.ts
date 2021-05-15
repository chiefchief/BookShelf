import {INITIAL_USER} from './__proto__';

enum UserTypes {
  SET_USER = '[user] SET_USER',
  RESET_USER = '[user] RESET_USER',
}

const initialstate = new INITIAL_USER();

export default (state = initialstate, action: any) => {
  switch (action.type) {
    case UserTypes.SET_USER:
      return new INITIAL_USER({...state, ...action.data});
    case UserTypes.RESET_USER:
      return initialstate;
    default:
      return state;
  }
};

export const setUser = (data: any) => ({data, type: UserTypes.SET_USER});
export const resetUser = () => ({type: UserTypes.RESET_USER});

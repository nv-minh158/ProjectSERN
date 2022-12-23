import { IAuth } from '../../interface/Auth';

const initState: IAuth = {
  isLoggedIn: false,
  token: null,
};

const authReducer = (state: unknown = initState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default authReducer;

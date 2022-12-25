import { IAuth } from '../../interface/Auth';
import actionType from '../actions/actionType';

const initState: IAuth = {
  isLoggedIn: false,
  accessToken: null,
};

const authReducer = (state: unknown = initState, action: any) => {
  console.log(action.data);
  switch (action.type) {
    case actionType.REGISTER_SUCCESS:
      return {
        ...(state as object),
        isLoggedIn: true,
        accessToken: action.data,
      };
    case actionType.REGISTER_FAIL:
      return {
        ...(state as object),
        isLoggedIn: false,
        accessToken: null,
        message: action.data,
      };
    case actionType.LOGIN_SUCCESS:
      return {
        ...(state as object),
        isLoggedIn: true,
        accessToken: action.data,
      };
    case actionType.LOGIN_FAIL:
      return {
        ...(state as object),
        isLoggedIn: false,
        accessToken: null,
        message: action.data,
      };
    case actionType.LOGOUT:
      return {
        ...(state as object),
        isLoggedIn: false,
        accessToken: null,
      };
    default:
      return state;
  }
};

export default authReducer;

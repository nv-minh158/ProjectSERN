import actionType from "./actionType";
import { apiRegister } from "../../services/auth";
import { IUser } from "../../interface/User";
// TODO change interface dispatch later
export const register = (payload: IUser) => async (dispatch: any) => {
  try {
    const response = await apiRegister(payload);
    if (response?.data.success === true) {
      dispatch({
        type: actionType.REGISTER,
        data: response?.data.accessToken,
      });
    }
  } catch (error) {
    dispatch({
      type: actionType.REGISTER,
      data: null,
    });
  }
};

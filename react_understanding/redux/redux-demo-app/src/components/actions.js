import { userLogin } from "../slices/loginSlice";
export const PURCHASE = "PURCHASE";
export const DELETE = "DELETE";
export const LOGIN = "LOGIN";
export const validateUser = (loginDetails) => {
  //api call fetching user and then validate
  return (dispatch) => {
    setTimeout(() => {
      //dispatch({ type: LOGIN, payload: loginDetails });
      dispatch(userLogin(loginDetails));
    }, 2000);
  };
};

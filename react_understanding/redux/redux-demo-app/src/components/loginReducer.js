import * as actions from "./actions";

const initData = {
  users: ["admin", "manager", "end-user"],
  loginDetails: "None",
};

const loginReducer = (state = initData, action) => {
  if (action.type === actions.LOGIN) {
    return {
      ...state,
      loginDetails: action.payload,
    };
  }

  return state;
};

export default loginReducer;

/**
 The <Provider> component makes the redux store available to any nested components that need access
 to redux store
 */

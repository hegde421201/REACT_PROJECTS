import { createSlice } from "@reduxjs/toolkit";

const initState = {
  users: ["admin", "manager", "end-user"],
  loginDetails: "None",
};

const loginSlice = createSlice({
  name: "login",
  initialState: initState,
  reducers: {
    userLogin: (state, action) => {
      state.loginDetails = action.payload;
    },
  },
});

export const { userLogin } = loginSlice.actions;
export default loginSlice.reducer;

/**
 The <Provider> component makes the redux store available to any nested components that need access
 to redux store
 */

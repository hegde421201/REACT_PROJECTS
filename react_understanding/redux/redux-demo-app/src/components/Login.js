import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { LOGIN } from "./actions";
const Login = () => {
  const users = useSelector((state) => state.lr.users);
  const dispatch = useDispatch();
  const loginHandler = (e) => {
    let loginDetails = e.target.options[e.target.selectedIndex].text;
    dispatch({ type: LOGIN, payload: loginDetails });
  };
  return (
    <div className="customDiv">
      <h3> Login Component</h3>
      <hr></hr>
      <select onChange={(e) => loginHandler(e)}>
        {users.map((x, index) => {
          return <option key={uuidv4()}>{x}</option>;
        })}
      </select>
    </div>
  );
};

export default Login;

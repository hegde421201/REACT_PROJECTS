import React from "react";
import Button from "./Button";
const Form = ({ requestType, setRequestType }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Button
        buttonText="users"
        requestType={requestType}
        setRequestType={setRequestType}
      ></Button>
      <Button
        buttonText="posts"
        requestType={requestType}
        setRequestType={setRequestType}
      ></Button>
      <Button
        buttonText="comments"
        requestType={requestType}
        setRequestType={setRequestType}
      ></Button>
    </form>
  );
};

export default Form;

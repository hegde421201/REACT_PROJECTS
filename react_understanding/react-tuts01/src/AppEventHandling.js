import "./App.css";
import React, { useEffect, useState } from "react";

function AppEventHandling() {
  const [data, setData] = useState("default");

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
  });

  const [singleState, setSingleState] = useState({
    address: "",
    comments: "",
  });

  const inputChangeHandlerOLD = (e) => {
    //[e.target.name] ---> square bracket means a dynamic key in ES6
    //the first time this function is invoked the [e.target.name] will be either "address" or "comments"
    setSingleState({ ...singleState, [e.target.name]: e.target.value });
  };

  const inputChangeHandler = (e) => {
    //[e.target.name] ---> square bracket means a dynamic key in ES6
    //the first time this function is invoked the [e.target.name] will be either "address" or "comments"

    //the below syntax is a functional update as REACT does not update immediately
    setSingleState((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const firstNameChangeHandler = (e) => {
    setFormState({ ...formState, firstName: e.target.value });
  };
  const lastNameChangeHandler = (e) => {
    setFormState({ ...formState, lastName: e.target.value });
  };
  const mobileChangeHandler = (e) => {
    setFormState({ ...formState, mobile: e.target.value });
  };

  const getData = (e) => {
    console.log("Data required ---> " + e.target.innerHTML);
  };

  const getText = (e) => {
    console.log("text " + e.target.value);
    setData(e.target.value);
  };

  const getFormData = (e) => {
    e.preventDefault(); //preventing the default behaviour of the form on submit clicked---the
    //default behaviour is to submit form data to the server and clear all the fields.
    //the default behaviour does not erase the data typed inside the form elements
    console.log("Submission done");
    setData(
      formState.firstName + ", " + formState.lastName + ", " + formState.mobile
    );
  };
  return (
    <div className="AppEventHandling">
      <h1>{data}</h1>
      <button onClick={getData}>Clickers</button>
      <input onChange={getText} type="text"></input>

      <hr></hr>

      <div>
        <form onSubmit={getFormData}>
          <input
            type="text"
            placeholder="First name"
            onChange={firstNameChangeHandler}
          ></input>
          <br></br>
          <input
            type="text"
            placeholder="Last Name"
            onChange={lastNameChangeHandler}
          ></input>
          <br></br>
          <input
            type="text"
            placeholder="Mobile"
            onChange={mobileChangeHandler}
          ></input>
          <br></br>
          <hr></hr>
          <input
            type="text"
            name="address"
            placeholder="Address"
            onChange={inputChangeHandler}
          ></input>
          <br></br>
          <input
            type="text"
            name="comments"
            placeholder="Comments"
            onChange={inputChangeHandler}
          ></input>
          <br></br>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
      {JSON.stringify(formState)}
      <br></br>
      {JSON.stringify(singleState)}
    </div>
  );
}

export default AppEventHandling;

/**A SyntheticEvent is a a wrapper around the native browser event object and that is passed to every
 * function automatically
 *
 *
 * e.target.value====> e is the synthetic event ---> get the value from text box
 *
 *
 ES6 example
 let test = "abcd";
const obj = {
  [test] : 'name'
}

Here [test] because of the square brackets becomes a dynamic variable and not a static key.
It will contain the key value as "abcd"
 */

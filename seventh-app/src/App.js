import React, { useState } from "react";

//controlled inputs forms
const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("setup");
  const [email, setEmail] = useState("done");
  const [person, setPerson] = useState([]);

  const handleSubmit = (e) => {
    //we add the preventdefault
    e.preventDefault();

    if (firstName && email) {
      const person = { firstName, email };
      setPerson((p1) => {
        return [...person, p1];
      });
      setEmail("");
      setFirstName("");
    } else {
      console.log("empty values");
    }
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name :</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email :</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit">Add employee</button>
        </form>
        {person.map((p1, index) => {
          const { id, firstName, email } = person;
          return (
            <div className="item">
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;

import React, { useState } from "react";

//controlled inputs forms
const MultForms = () => {
  const [employee, setEmployee] = useState({
    firstName: "",
    email: "",
    age: "",
  });

  const [person, setPerson] = useState([]);

  const handleChanges = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // ... dot dot dot is the spread operator because we copy the earlier state values and update only the changed parameters
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employee.firstName && employee.email && employee.age) {
      /* setPerson(
        Object.entries(employee).map(([key, obj]) => ({ key, ...obj }))
      ); */
      setPerson([
        ...person,
        { ...employee, id: new Date().getTime().toString() },
      ]);
      setEmployee({ firstName: "", email: "", age: "" });
    }
  };

  return (
    <>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name :</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={employee.firstName}
              onChange={handleChanges}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email :</label>
            <input
              type="text"
              id="email"
              name="email"
              value={employee.email}
              onChange={handleChanges}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age :</label>
            <input
              type="text"
              id="age"
              name="age"
              value={employee.age}
              onChange={handleChanges}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Add employee
          </button>
        </form>
        {person.map((p1) => {
          const { age, firstName, email, id } = p1;
          return (
            <div className="item" key={id}>
              <h4>Name: {firstName}</h4>
              <p>Email: {email}</p>
              <p>Age: {age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default MultForms;

/**
 
 */

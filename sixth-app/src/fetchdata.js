import React, { useEffect, useState } from "react";

const UseEffectFetchData = () => {
  const url = "https://api.github.com/users";
  const [users, setUsers] = useState([]);

  //async await to fetch data
  const getUsers = async () => {
    const response = await fetch(url);
    const users2 = await response.json();
    setUsers(users2);
    console.log(users2);
  };

  useEffect(() => {
    getUsers();
  }, []); //empty definitive array added to restrict download once only

  return (
    <>
      <h1>Github Users</h1>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login}></img>
              <div>
                <h4>{login}</h4>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;

//by default,useEffect will run after every re-render
//cleanup function
//the functionalities within the useEffect will also be executed on every button clicked

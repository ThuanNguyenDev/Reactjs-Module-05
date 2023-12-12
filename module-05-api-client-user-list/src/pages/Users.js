import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";


function Users() {
  const [users, setUsers] = useState([]);

  useEffect (
    ()=> {
axios

.get("http://localhost:3000/api/users")

.then((response) => {
    setUsers(response.data);

})
.catch((err) => {

    throw err;


});

    } , []  );



  const handleCreate = () => {
    window.location.href="/user/add"
  }
 
  return (
    <div>
      <h1>User List</h1>
      {users.map((user) => (
        // <div>{user.name}</div>

        <div key={user.id}>
        <a href={`/user/${user.id}`}> {user.name} </a>
      </div>

      ))}

      <button type="button" onClick={handleCreate} >Create Button</button>


    </div>
  );
}

export default Users;

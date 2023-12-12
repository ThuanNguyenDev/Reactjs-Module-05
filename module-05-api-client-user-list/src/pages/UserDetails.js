import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function UserDetails() {
  const { userID } = useParams();
  const isCreate = !userID;
  const { user, setUser } = useState({});

  useEffect(() => {
    if (userID) {
      axios
        .get(`http://localhost:3000/api/users/${userID}`)
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          throw err;
        });
    }
  }, [userID]);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:3000/api/users", user)
      .then((res) => {
        alert(
          `${isCreate ? "Create" : "Edit"} user ${JSON.stringify(
            res.data
          )} successfully `
        );
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <div>
        
      <h1>UserDetails</h1>

      <form>
        <div>
          <lable>Id</lable>
          <input name="id" value={user.id || ""} onChange={handleChange} />
        </div>

        <div>
          <label>Name</label>
          <input name="name" value={user.name || ""} onChange={handleChange} />
        </div>

        <div>
          <label>Birthday</label>
          <input
            type="date"
            name="birthday"
            value={user.birthday || ""}
            onChange={handleChange}
          />
        </div>

        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserDetails;

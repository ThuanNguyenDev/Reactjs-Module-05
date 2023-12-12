import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'

function AddPerson() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [avatar, setAvatar] = useState("");
  const [address, setAddress] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangePosition = (event) => {
    setPosition(event.target.value);
  };

  const handleChangeAvatar = (event) => {
    setAvatar(event.target.value);
  };

  const handleChangeAddress = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: name,
      position: position,
      avatar: avatar,
      address: address,
    };

    axios
      .post(`https://653785a5bb226bb85dd35c08.mockapi.io/api/v1/staffs`, user)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate(-1);
      });
  };

  return (
    <div>

      <Link to={"/"}> BACK TO HOME </Link>
      <br></br>
      <br></br>
      <form onSubmit={handleSubmit}>
        <label>
          Person Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChangeName}
          />
        </label>
        <br></br>
        <br></br>

        <label>
          Position:
          <input
            type="text"
            name="position"
            value={position}
            onChange={handleChangePosition}
          />
        </label>

<br></br>
<br></br>
        <label>
          Avatar:
          <input
            type="text"
            name="avatar"
            value={avatar}
            onChange={handleChangeAvatar}
          />
        </label>
        <br></br>
        <br></br>

        <label>
          Address:
          <input
            type="text"
            name="address"
            value={address}
            onChange={handleChangeAddress}
          />
        </label>

        <br></br>
        <br></br>

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddPerson;

import React from "react";
import {useState}  from 'react'
import axios from 'axios'
import { STAFFS_MANAGEMENT_API } from '../constant/AddContant';

function StaffCreate() {

  const [staff, setStaff] = useState({});

  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
  

    setStaff({...staff,
      [e.target.name] : e.target.value});

    console.log(staff);

    
  };

  const handleSubmit = () => {

    axios.post(`${STAFFS_MANAGEMENT_API}/staffs`,staff)
    .then( res => {
     alert("created ok")
    })
    .catch(err => {
      console.log(err);
    })


  }


  return (
    <>
      <h2> ADD NEW STAFF</h2>

      <form>
        {/* <input type="text" name="id" readOnly value={staff?.id} /> */}
        <label htmlFor="name">Name:</label>
        <input onChange={handleChange} type="text" name="name" />
        <br></br>
        <br></br>

        <label htmlFor="position">Position:</label>
        <input onChange={handleChange} type="text" name="position" />

        <br></br>
        <br></br>

        <label htmlFor="avatar">Avatar:</label>
        <input onChange={handleChange}  type="text" name="avatar" />
      
        <label htmlFor="address">Address:</label>
        <input onChange={handleChange} type="text" name="address" />

        <br></br>
        <br></br>

        <input type="button" onClick={handleSubmit} value={"Submit"} />
      
      </form>
    </>
  );
}

export default StaffCreate;

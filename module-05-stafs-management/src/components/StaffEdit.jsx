

import React from 'react'
import { useEffect } from 'react';
import {useState} from 'react'
import { STAFFS_MANAGEMENT_API } from '../constant/AddContant';
import axios from 'axios'
import  {useParams} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function StaffEdit() {

  const [ staff, setStaff] =  useState({});

  const {id} = useParams();
  const navigate = useNavigate();

  useEffect ( 
    () => {
      fetchExistingStaff(id);
    } ,[id]
  );

  const fetchExistingStaff = async (id) => {

    await axios
    .get(`${STAFFS_MANAGEMENT_API}/staffs/${id}`)
    .then(res => {
        setStaff(res.data);
    })
    .catch(
      err => {
        console.log(err);
      }
    )
  }

  const handleChange = (e) => {
    setStaff ( { ...staff , [e.target.name] : e.target.value})
  }

  const handleSubmit = async () => { 

    await axios
    .put(`${STAFFS_MANAGEMENT_API}/staffs/${id}`, staff)
    .then ( () => {
   
        navigate(-1);
;    })
    .catch ( err => {
      console.log(err);
    })

  }
  


  
  return (
    <div>

<h2> EDIT STAFF</h2>

<form>
        <input type="hidden" name="id" readOnly value={staff?.id} />
        <label htmlFor="name">Name:</label>
        <input onChange={handleChange} value={staff?.name} type="text" name="name" />
        <br></br>
        <br></br>

        <label htmlFor="position">Position:</label>
        <input onChange={handleChange} value={staff?.position} type="text" name="position" />

        <br></br>
        <br></br>

        <label htmlFor="avatar">Avatar:</label>
        <input onChange={handleChange} value={staff?.avatar}  type="text" name="avatar" />
      
        <label htmlFor="address">Address:</label>
        <input onChange={handleChange} value={staff?.address} type="text" name="address" />

        <br></br>
        <br></br>

        <input type="button" onClick={handleSubmit} value={"Update"} />
      
      </form>



    </div>
  )
}

export default StaffEdit

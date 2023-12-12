import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import axios from 'axios';
import { STAFFS_MANAGEMENT_API } from '../constant/AddContant';
import { useNavigate } from "react-router-dom";


function StaffDetail() {
  
  const { id } = useParams(); 

  const [staff, setStaff] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    fetchStaff(id);
  }, [id]);

  const fetchStaff = () => {
    axios
      .get(`${STAFFS_MANAGEMENT_API}/staffs/${id}`)
      .then((response) => {
        setStaff(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  

  const handleRemove = async () => {
     await axios
      .delete(`${STAFFS_MANAGEMENT_API}/staffs/${id}`)
      .then(() => {
       alert("remove ok")
       navigate(-1);
      })
      .catch((error) => {
        console.error(error);
      });

  }

  return (
    <div className="staff-detail">
    <h2>STAFF DETAIL</h2>
    <label>ID</label>
    <input value={staff.id} />
  
    <label>NAME</label>
    <input value={staff.name} />    
  
    <label>POSITION</label>
    <input value={staff.position} />
  
    <label>AVATAR</label>
    <img src={staff.avatar} alt="Avatar" />
  
    <label>ADDRESS</label>
    <input value={staff.address} />

    <button  onClick={handleRemove}> REMOVE</button>
    
  </div>
  
  );
}

export default StaffDetail;

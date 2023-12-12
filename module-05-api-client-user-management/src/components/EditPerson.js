import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getStaffByID } from "./commonFunction";
import {Link} from "react-router-dom"

const PersonEdit = () => {
  const [person, setPerson] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

const updateApi = async (updatedPerson)=>{
  let result = null;
  // try{
   await axios.put(`https://653785a5bb226bb85dd35c08.mockapi.io/api/v1/staffs/${id}`, updatedPerson)
   .then(res => {
    result = res.data;
   })
   .catch(e => {
    console.log(e);
   })

  // }catch(e){
  //   console.log(e);
  // }
  // console.log("result");
  console.log(result);  
  return result;
}

 const fetchPerson = async () => {
  let subUser = await  getStaffByID(id)
  setPerson(subUser)
 }

  useEffect( () => {
    fetchPerson()
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedPerson = {
      name: e.target[0].value,
      position: e.target[1].value,
      address: e.target[2].value,
    };
    const result = await updateApi(updatedPerson);
    if(result != null ){
      navigate('/')
    }
      
  };

  return (
    <div>

<Link to={"/"}> BACK TO HOME </Link>
      <h2>Chỉnh sửa thông tin người</h2>
      <form onSubmit={handleUpdate}>
        <input type="text" defaultValue={person.name} />
        <input type="text" defaultValue={person.position} />
        <input type="text" defaultValue={person.address} />
        <button type="submit">Lưu</button>
      </form>
    </div>
  );
};

export default PersonEdit;

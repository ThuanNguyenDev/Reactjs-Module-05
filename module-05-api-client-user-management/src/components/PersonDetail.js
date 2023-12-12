import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom'

function PersonDetail() {
  const [person, setPerson] = useState({});
  const  {id}  = useParams();

  
  useEffect(() => {
  
    axios
      .get(`https://653785a5bb226bb85dd35c08.mockapi.io/api/v1/staffs/${id}`)
      .then((res) => {
        setPerson(res.data);
      })
      .catch((error) => console.log(error));
      console.log(person);
  }, [id]);

  return (
    <div>
      <h2>Chi tiết người: {person.name}</h2>
      <p>Email: {person.position}</p>
      <p>Điện thoại: {person.address}</p>

      <Link to={"/"}>BACK</Link>
  
    </div>
  );
}

export default PersonDetail;

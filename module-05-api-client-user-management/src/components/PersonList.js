import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { handleDelete } from "./DeletePerson.js";


function PersonList() {
  const [persons, setPersons] = useState([]);
  const [reaload, setReaload] = useState(false);
  // const navigate = useNavigate();


  const fetchPerson = async () => {
    await axios
      .get(`https://653785a5bb226bb85dd35c08.mockapi.io/api/v1/staffs`)
      .then((res) => {
        setPersons(res.data);
        // console.log(res);
      })
      .catch((error) => console.log(error))
    }
  useEffect(() => {
   fetchPerson()
   
  }, [reaload]);

  // const handleEdit = (id,e) => {
  //   e.preventdefault()
  //   console.log(id);
  //   // navigate(`/edit/${id}`);
  // }

  return (
    <div>
      <ul>


        <Link to={`/add`}> ADD NEW STAFF </Link>

        <br></br>
        <br></br>
        {persons.map((person) => (
          <li key={person.id}>
            <br></br>
          

            <Link to={`/details/${person.id}`}>  {person.name}  </Link>
            
            -  {person.position} - {person.address}
            
            <Link to={`/details/${person.id}`}> - Xem chi tiết - </Link>
         
            <Link to={`/edit/${person.id}`}>Sửa - </Link>

            {/* <button type="button" onClick={handleEdit(person)}/> */}
          
          
            <button
              onClick={async () => {
                if(window.confirm("Muon xoa khong ")){
                  await handleDelete(person.id);
                setReaload(!reaload);
                }
                
              }}
            >
              {" "}
              Xóa
              {" "}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PersonList;

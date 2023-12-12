import React from 'react'
import { useNavigate } from "react-router-dom";

function Category() {

    let navigate = useNavigate();   

    const sendDataToProduct = (e) => {
        navigate("/product", { state : {categoryID : e.target.value}});
    };



  return (
    <div>
        <h2>Select a Category :</h2>
        <select defaultValue="default" onChange={sendDataToProduct}>
            <option value="default" disabled hidden>
            Choose your car</option>
            <option value="1"> CAMRY</option>
            <option value="2"> VIOS</option>
            <option value="3"> ALTIS</option>

        </select>

        

    </div>
  );
}

export default Category
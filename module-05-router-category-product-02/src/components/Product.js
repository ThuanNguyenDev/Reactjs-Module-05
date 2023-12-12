import React from 'react'
import {useLocation}  from "react-router-dom"

function Product() {
    const {state} = useLocation();

  return (
    <div>
        <h2>ID Selected {state.categoryID}</h2>


    </div>
  )
}

export default Product
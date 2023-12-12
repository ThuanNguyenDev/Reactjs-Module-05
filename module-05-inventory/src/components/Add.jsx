import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { INVENTORY_MANAGEMENT_API } from "../constants/url";

function Add() {

  const [newProduct, setNewProduct] = useState({});

  const navigate = useNavigate();

  const handleInputChange = (e) => {

    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddProduct = () => {
    const confirmAdd = window.confirm("Are you sure you want to add this product?");
    if (confirmAdd) {
      try {
        axios.post(
          `${INVENTORY_MANAGEMENT_API}/product_management`,
          newProduct
        ).then((response) => {
          console.log("Product added:", response.data);
          navigate("/");
        });
      } catch (error) {
        console.error("Error adding product:", error);
      }
    } else {
        navigate("/");
    }
  };

  const handleRemove = () => {
    navigate('/');
  }
  

  return (
    <div>
      <h2>Add New Product</h2>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Inventory Quantity:</label>
          <input
            type="number"
            name="inventory_quantity"
            value={newProduct.inventory_quantity}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={handleAddProduct}>
          Add Product
        </button>
        <button type="button" onClick={handleRemove}>REMOVE</button>
      </form>
    </div>
  );
}

export default Add;

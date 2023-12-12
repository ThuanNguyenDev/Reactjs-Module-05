import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { INVENTORY_MANAGEMENT_API } from "../constants/url";

function Edit() {

  const { id } = useParams();

  const [product, setProduct] = useState({});

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

const handleEditProduct = () => {
  const confirmEdit = window.confirm("Are you sure you want to edit this product?");
  if (confirmEdit) {
    try {
      axios.put(
        `${INVENTORY_MANAGEMENT_API}/product_management/${id}`,
        product
      ).then(() => {
        navigate("/");
      });
    } catch (error) {
      console.error("Error editing product:", error);
    }
  } else {
    navigate("/");
  }
};


  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(
          `${INVENTORY_MANAGEMENT_API}/product_management/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product detail:", error);
      }
    };

    fetchProductDetail();
  }, [id]);

  return (
    <div>
      <h2>Edit Product</h2>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Inventory Quantity:</label>
          <input
            type="number"
            name="inventory_quantity"
            value={product.inventory_quantity}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={handleEditProduct}>
          Edit Product
        </button>
      </form>
    </div>
  );
}

export default Edit;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams , Link } from "react-router-dom";
import { INVENTORY_MANAGEMENT_API } from "../constants/url";


function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});



  useEffect(() => {

   const fetchProductDetail = async () => {
      try {
        const response = await axios.get(
          `${INVENTORY_MANAGEMENT_API}/product_management/${id}`
        );
  
        setProduct(response.data);
        console.log(response.data);
  
      } catch (error) {
        console.error("Error fetching product detail:", error);
      }
    };
  
    fetchProductDetail();
  }, [id]);

  return (
    <div>
      <h2>Product Detail</h2>
      <Link to={`/`}> LIST</Link>
     
        <div>
          <p>
            <strong>Name:</strong> {product.name}
          </p>
          <p>
            <strong>Price:</strong> {product.price}
          </p>
          <p>
            <strong>Inventory Quantity:</strong> {product.inventory_quantity}
          </p>
        </div>
     
    </div>
  );
}

export default Detail;

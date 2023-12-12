import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { INVENTORY_MANAGEMENT_API } from "../constants/url";
import { handleDeleteProduct } from "./Delete";

function List() {
  const [products, setProducts] = useState([]);
  const [reaload, setReaload] = useState(false);

  const getProductData = async () => {
    await axios
      .get(`${INVENTORY_MANAGEMENT_API}/product_management`)

      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })

      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getProductData();
  }, [reaload]);
  return (
    <div>
      <h1>
        {" "}
        <Link to={`/product_management/add`}> ADD NEW PRODUCT </Link>
      </h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Inventory Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                <Link to={`/product_management/details/${product.id}`}>
                  {product.name}
                </Link>
              </td>

              <td>{product.price}</td>
              <td>{product.inventory_quantity}</td>
              <td>
                <Link to={`/product_management/update/${product.id}`}>
                  Edit
                </Link>
                {"       "}
                <button
                  type="button"
                  onClick={async () => {
               
                      await handleDeleteProduct(product.id);
                      
                      setReaload(!reaload);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;

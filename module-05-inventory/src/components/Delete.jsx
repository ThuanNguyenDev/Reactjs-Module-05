import axios from "axios";
import { INVENTORY_MANAGEMENT_API } from "../constants/url";


 
 export const handleDeleteProduct = async (id) => {
    if (window.confirm("Are you sure that you want to delete it?")) {
      try {
        await axios.delete(`${INVENTORY_MANAGEMENT_API}/product_management/${id}`);
        // setReload(!reload);
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };
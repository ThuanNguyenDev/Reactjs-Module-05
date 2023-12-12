
import { useParams } from "react-router-dom";

function Product() {
 
let {categoryID, productID} = useParams();

  return (
    <div>
        

        <h3>ID selected  {categoryID} </h3>
        <h3>ID selected  {productID} </h3>

        
        
        
        </div>
  );
}

export default Product
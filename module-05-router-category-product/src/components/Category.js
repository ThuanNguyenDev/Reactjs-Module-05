
import {useNavigate} from 'react-router-dom'

function Category() {

  let naviagate = useNavigate();
 
  const sendDataToProduct = e => {

    naviagate(`/product/3/${e.target.value}`);

  };


  return (
    <div>
<h2>Select a Category : </h2>

 <select defaultValue="default"     onChange = {sendDataToProduct}>

  <option value="default" disabled hidden> Choose your car</option>

  <option value="1">Honda</option>

  <option value="2">Suzuki</option>

  <option value="3">Yamaha</option>

 </select>

    </div>
  );
}

export default Category
import {  Link } from "react-router-dom";

import AppRoutes from "./routers/AppRoutes";


function App() {
  
  return (
    <div>
      <ul>
        <li>
          <Link to="">Home</Link>
        </li>
        <li>
          <Link to="about/all">About</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>

  
     <hr/>
     <AppRoutes />

    </div>
  );
}

export default App;
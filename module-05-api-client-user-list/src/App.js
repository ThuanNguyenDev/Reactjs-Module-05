import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import UserDetails from './pages/UserDetails';
import Users from './pages/Users';

function App() {
  return (
  <BrowserRouter>
  <Routes>
<Route path="/" element={<Users />} />
<Route path={"/user/add"} element={ <UserDetails />} />
<Route path={`/user/:userID`} element={ <UserDetails />}   />

  </Routes>
  </BrowserRouter>
  );
}

export default App
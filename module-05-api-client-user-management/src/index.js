
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddPerson from "./components/AddPerson";
import EditUser from "./components/EditPerson";
import PersonDetail from "./components/PersonDetail";
import PersonList from "./components/PersonList";

ReactDOM.render(
  <BrowserRouter>
    <Routes>

      <Route path="/" element={<PersonList />} />
      <Route path="add" element={<AddPerson />} />
      <Route path="details/:id" element={<PersonDetail />} />
      <Route path="edit/:id" element={<EditUser />} />
      <Route path="delete/:id" element={<handleDelete />} />
      
    </Routes>


  </BrowserRouter>,
  
  document.getElementById("root")
);

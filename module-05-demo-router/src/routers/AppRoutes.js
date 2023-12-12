import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";


function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about/all" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;

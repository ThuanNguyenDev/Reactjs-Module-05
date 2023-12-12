import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddProduct from './components/AddProduct';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (

<BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path={`/product_management/details/:id`} element={<Detail />} />
        <Route path={"/product_management/add"} element={<Add />} />
        <Route path={`/product_management/update/:id`} element={<Update />} />
        {/* <Route path={`/product_management/delete/:bookId`} element={<Delete />} /> */}
      </Routes>
    </BrowserRouter>
  
  )
}

export default App
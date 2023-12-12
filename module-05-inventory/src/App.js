import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Add from './components/Add'

import Detail from './components/Detail'
import List from './components/List'
import Update from './components/Update'

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
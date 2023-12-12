import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Category from './components/Category';
import Product from './components/Product';



function App() {


  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Category/> }/>  
      <Route path="/product/:productID/:categoryID" element = {<Product/>}   />
  </Routes>
  
  </BrowserRouter>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Category from './components/Category';
import Product from './components/Product';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Category/>}   />
    <Route path="/product" element={<Product/>}   />

   </Routes>
   </BrowserRouter>
  );
}

export default App;

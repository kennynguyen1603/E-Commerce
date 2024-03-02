// import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import { LayoutMain } from '@/layouts/LayoutMain';
import LayoutAuth from '@/layouts/LayoutAuth';
import Login from '@/pages/Login';
import ProductListing from '@/pages/ProductListing';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain/>} >
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='productlist' element={<ProductListing/>} />
        </Route>
        <Route element={<LayoutAuth/>} >
          <Route path='/login' element={<Login/>} />
        </Route>
        <Route path='/*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App

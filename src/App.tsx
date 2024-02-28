// import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import { LayoutMain } from '@/Layout/LayoutMain';
import LayoutAuth from '@/Layout/LayoutAuth';
import Login from '@/pages/Login';
import Product from '@/pages/Product';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain/>} >
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='product' element={<Product/>} />
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

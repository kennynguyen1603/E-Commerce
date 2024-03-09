// import React from 'react'
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutAuth />} >
          <Route path='/login' element={<PagesLogin />} />
          <Route path='/register' element={<PagesRegister />} />
        </Route>
        <Route element={<LayoutMain />} >
          <Route path='/' element={<PagesHome />} />
          <Route path='/home' element={<PagesHome />} />
          <Route path='/products' element={<PagesProducts />} />
        </Route>

        <Route path='/register' element={<PagesNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App

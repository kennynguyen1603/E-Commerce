// import React from 'react'
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />} >
          <Route path='/' element={<PagesHome />} />
          <Route path='/home' element={<PagesHome />} />
          <Route path='/products' element={<PagesProducts />} />
        </Route>
        <Route element={<LayoutAuth />} >
          <Route path='/login' element={<PagesLogin />} />
        </Route>
        <Route path='/register' element={<PagesNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App

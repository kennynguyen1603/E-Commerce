// import React from 'react'
import './App.css'
import '@/styles/Home.less';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />} >
          <Route path='/' element={<PagesHome />} />
          <Route path='/home' element={<PagesHome />} />
          <Route path='/products' element={<PagesProducts />} />
          <Route path='/cart' element={<PagesCart/>} />
        </Route>
        <Route element={<LayoutAuth />} >
          <Route path='/login' element={<PagesLogin />} />
        </Route>
        <Route path='/*' element={<PagesNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App

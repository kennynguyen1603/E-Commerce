// import React from 'react'
import './App.css'
import '@/styles/Home.less';
import AuthProvider from './context/AuthContext';

function App() {
  const [infoUser, setInfoUser] = useState(null)

  useEffect(() => {
    console.log("🚀 ~ App ~ infoUser:", infoUser)
  }, [infoUser])
  return (
    <AuthProvider value={{ infoUser, setInfoUser }}>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutAuth />} >
            <Route path='/login' element={<PagesLogin />} />
            <Route path='/sign-up' element={<PagesRegister />} />
          </Route>
          <Route element={<LayoutMain />} >
            <Route path='/' element={<PagesHome />} />
            <Route path='/home' element={<PagesHome />} />
            <Route path='/products' element={<PagesProducts />} />
            <Route path='/cart' element={<PagesCart />} />
            <Route path='/contact' element={<PagesContact />} />
            <Route path='/about' element={<PagesAbout />} />
          </Route>

          <Route path='/register' element={<PagesNotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
}
export default App

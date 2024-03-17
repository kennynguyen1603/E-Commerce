import './App.css'
import '@/styles/Home.less';
import AuthProvider from './context/AuthContext';
// import axios from 'axios';
import { getInfoToLocalStorage } from './utils/product';
import { updateAuthorization } from './config/axios';
import ProductDetail from "@/components/products/ProductDetail"

function App() {
  const [infoUser, setInfoUser] = useState<InfoUserType | null>(null)
  const [cartItems, setCartItems] = useState<cartItemsServerType[]>([])
  const [wishlist, setWishlist] = useState<wishItemsType[]>([])

  useEffect(() => {
    console.log("🚀 ~ App ~ infoUser:", infoUser)
  }, [infoUser])

  function getInfoUserFromStorage() {
    const res: InfoUserType | null = getInfoToLocalStorage()
    if (res) {
      setInfoUser(res)
      updateAuthorization(res.accessToken)
    }
  }

  useEffect(() => {
    getInfoUserFromStorage();
  }, [])

  return (
    <AuthProvider value={{ infoUser, setInfoUser, cartItems, setCartItems, wishlist, setWishlist }}>
      <BrowserRouter basename={import.meta.env.PROD ? `/E-Commerce/` : ''}>
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
            <Route path='/wishlist' element={<PagesWishlist />} />
            <Route path='/contact' element={<PagesContact />} />
            <Route path='/about' element={<PagesAbout />} />
            <Route path='/product/:productId' element={<ProductDetail />} />
          </Route>
          <Route path='*' element={<PagesNotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
}
export default App

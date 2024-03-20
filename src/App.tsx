import './App.css'
import '@/styles/Home.less';
import AuthProvider from './context/AuthContext';
// import axios from 'axios';
import { getInfoToLocalStorage } from './utils/product';
import { updateAuthorization } from './config/axios';


// interface cartItemsType {
//   productId: string;
//   title: string;
//   price: number;
//   quantity: number;
//   description: string;
//   discount: number;
//   rating: number;
//   stock: number;
//   thumbnail: string;
//   category: string;
//   image: Array<string>;
// }

// interface wishItemsType {
//   productId: string;
//   title: string;
//   price: number;
//   quantity: number;
//   description: string;
//   discount: number;
//   rating: number;
//   stock: number;
//   thumbnail: string;
//   category: string;
//   image: Array<string>;
// }

function App() {
  const [infoUser, setInfoUser] = useState<InfoUserType | null>(null)
  const [cartItems, setCartItems] = useState<cartItemsType[]>([])
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
    console.log("🚀 ~ App ~ cartItems:", cartItems)
    console.log("🚀 ~ App ~ wishlist:", wishlist);
  }, [cartItems, wishlist])

  useEffect(() => {
    getInfoUserFromStorage();
  }, [])

  return (
    <AuthProvider value={{ infoUser, setInfoUser, cartItems, setCartItems, wishlist, setWishlist }}>
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
            <Route path='/wishlist' element={<PagesWishlist />} />
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

import { updateAuthorization } from '@/config/axios';
import { AuthContext } from '@/context/AuthContext';
import '@/styles/Login.css';
import { saveInfoToLocalStorage } from '@/utils/product';
import axios from 'axios';


export default function Login() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const authContext = useContext<any>(AuthContext)
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  function onLogin() {
    if (name && password) {
      setLoading(true)
      axios.post(`${import.meta.env.VITE_API_BACKEND_BASE}auth/login`, {
        email: name,
        password: password
      })
        .then((res) => {
          if (res) {
            authContext.setInfoUser(res.data)
            if (res?.data?.accessToken) {
              // Axios.defaults.headers.common['Authorization'] = `Bearer ${res?.data?.accessToken}`

              updateAuthorization(res.data.accessToken)
              saveInfoToLocalStorage(res.data as InfoUserType)

              // localStorage.setItem('infoUser', JSON.stringify(res.data))
              navigate(searchParams.get('redirect') || '/')
              console.log("🚀 ~ .then ~ location:", searchParams.get('redirect'))
            }
          }
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }
  return (
    <>
      <div>
        <LayoutHeader />
        <div className="py-20 bg-gray-100 lg:flex lg:items-center text-gray-500">
          <div className="lg:w-1/2"><img src="./src/assets/LoginBG-89b402e9.png" alt="LoginBG" /></div>
          <div className="lg:w-1/2 p-5 mx-10 lg:mx-20 lg:p-10 border border-gray-300 rounded-3xl">
            <div className="flex items-center justify-center">
              <img src="./src/assets/logoGrey-81085dfe.png" alt="apple-logo" className="lg:w-1/12 w-1/12" />
              <p className="text-3xl font-bold">Apple</p>
            </div>
            <h1 className="text-2xl my-5 font-bold">Login</h1>
            <div className="w-full">
              <div>
                <label htmlFor="username">Email</label>
                <div className="flex items-center">

                  <input name="email" placeholder="Enter your email" onChange={(e) => setName(e.target.value)} value={name} className="sign-up-input w-full" />
                </div>
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <div className="flex items-center">

                  <input name="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter your password" type="password" className="sign-up-input-y w-full" />

                </div>
              </div>
              <button type="submit" disabled={loading} className="btn-blue w-full mt-5" onClick={onLogin}>Login</button>
            </div>
            <div className="text-center">
              <a href="/forgot-password" className="my-5 text-blue-600 font-bold cursor-pointer hover:text-blue-500">Forgot Password?</a>
              <p className="my-4">OR</p>
              <div className="flex justify-center">
                <div style={{ height: "40px" }}>
                  <div className="S9gUrf-YoZ4jf" style={{ position: "relative" }}>

                  </div>
                </div>
              </div>
            </div>
            <p className="my-5">
              Don't have an account?
              <a href="/register" className="text-blue-600 font-semibold cursor-pointer hover:text-blue-500">Sign Up now</a>
            </p>
          </div>
        </div>
        <LayoutFooter />
      </div>

    </>
  );
}

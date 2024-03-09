import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';



export default function Login() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  return (
    <>
      <div>
        <Header />
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
                  <div className="sign-up-icon">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                    </svg>
                  </div>
                  <input name="email" placeholder="Enter your email" onChange={(e) => setName(e.target.value)} value={name} className="sign-up-input w-full" />
                </div>
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <div className="flex items-center">
                  <div className="sign-up-icon">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                    </svg>
                  </div>
                  <input name="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter your password" type="password" className="sign-up-input-y w-full" />
                  <div className="sign-up-icon-rev">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                    </svg>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn-blue w-full mt-5">Login</button>
            </div>
            <div className="text-center">
              <a href="/forgot-password" className="my-5 text-blue-600 font-bold cursor-pointer hover:text-blue-500">Forgot Password?</a>
              <p className="my-4">OR</p>
              <div className="flex justify-center">
                <div style={{ height: "40px" }}>
                  <div className="S9gUrf-YoZ4jf" style={{ position: "relative" }}>

                    <iframe
                      src="https://accounts.google.com/gsi/button?type=standard&amp;theme=outline&amp;size=large&amp;text=undefined&amp;shape=undefined&amp;logo_alignment=undefined&amp;width=undefined&amp;locale=undefined&amp;click_listener=undefined&amp;client_id=628424458787-qkhchkq95n7ht13oneer3692talfp63f.apps.googleusercontent.com&amp;iframe_id=gsi_529428_436546&amp;as=LORvSqYQmvs%2FHh4sZg6c8Q"
                      allow="identity-credentials-get"
                      id="gsi_529428_436546"
                      title="Sign in with Google account"
                      style={{ display: "block", position: "relative", top: "0px", left: "0px", height: "44px", width: "235px", border: "0px", margin: "-2px -10px" }}
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <p className="my-5">
              Don't have an account? <a href="/register" className="text-blue-600 font-semibold cursor-pointer hover:text-blue-500">Sign Up now</a>
            </p>
          </div>
        </div>
        <Footer />
      </div>

    </>
  );
}

import { AuthContext } from "@/context/AuthContext";
import { logout } from "@/services/auth";
import "@/styles/header.less";
import { FaApple } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
export default function Header() {
  // const [showHeader, setShowHeader] = useState(true);
  const { infoUser, setInfoUser } = useContext<any>(AuthContext);
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    setInfoUser(null)
    navigate('/')
  }

  const activeClass = (params: any) => {
    return params.isActive ? "active-item" : "";
  };

  return (
    <div className="home w-full flex justify-around p-5 text-custom-gray items-center font-bold sticky top-0 right-0 left-0 z-10 bg-white">
      <div className="logo flex items-center space-x-1.5">
        <FaApple />
        <a href="/home">ex.iphones</a>
      </div>
      <div className="routes flex space-x-6">
        <NavLink to="/home" className={activeClass}>
          Home
        </NavLink>
        <NavLink to="/contact" className={activeClass}>
          Contact
        </NavLink>
        <NavLink to="/about" className={activeClass}>
          About
        </NavLink>
        <NavLink to="/products" className={activeClass}>
          Products
        </NavLink>
      </div>

      {infoUser ? (
        <div className="flex gap-4 justify-center items-center">
          <NavLink to={"/cart"}>
            <FaCartShopping />
          </NavLink>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="auth flex space-x-2.5">
          <NavLink to="/login">Login</NavLink>
          <p>|</p>
          <NavLink to="/sign-up">Sign up</NavLink>
        </div>
      )}
    </div>
  );
}

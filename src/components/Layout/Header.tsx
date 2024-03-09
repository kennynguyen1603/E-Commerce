import {NavLink} from 'react-router-dom'
import { FaApple } from "react-icons/fa"; 
import "@/styles/header.less";
export default function Header() {
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY > 200 || window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeClass = (params : any) => {
	return params.isActive ? "active-item" : ""
}

  return (
  <div className="home w-full flex justify-around p-5 text-custom-gray items-center font-bold sticky top-0 right-0 left-0 z-10 bg-white">
        <div className="logo flex items-center space-x-1.5">
          <FaApple />
          <a href='/home'>ex.iphones</a>
        </div>   
        <div className="routes flex space-x-6">
          <NavLink to="/home" className={activeClass}>Home</NavLink>
          <NavLink to="/contact" className={activeClass}>Contact</NavLink>
          <NavLink to="/about" className={activeClass}>About</NavLink>
          <NavLink to="/products" className={activeClass}>Products</NavLink>
        </div>
        <div className="auth flex space-x-2.5">
          <NavLink to="/login">Login</NavLink>
          <p>|</p>
          <NavLink to="/signup">Sign up</NavLink>
        </div>
    </div>
  );
}

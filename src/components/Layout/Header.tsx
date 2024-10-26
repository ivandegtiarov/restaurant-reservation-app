import { PiShoppingCart } from "react-icons/pi";
import logo from "../../assets/img/LogoDelizioso.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isAssigned, setIsAssigned] = useState(true);
  return (
    <div className="header-container flex items-center m-auto w-[1112px] mt-12 justify-between">
      <div className="header-logo cursor-pointer">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <nav className="header-nav">
        <ul className="flex space-x-8 text-sm">
          <li className="cursor-pointer hover:text-orange-500 transition-colors duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-orange-500 transition-colors duration-300">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="cursor-pointer hover:text-orange-500 transition-colors duration-300">
            <Link to="/about-us">About us</Link>
          </li>
          <li className="cursor-pointer hover:text-orange-500 transition-colors duration-300">
            <Link to="/order-online">Order online</Link>
          </li>
          <li className="cursor-pointer hover:text-orange-500 transition-colors duration-300">
            <Link to="/reservation">Reservation</Link>
          </li>
          <li className="cursor-pointer hover:text-orange-500 transition-colors duration-300">
            <Link to="/contact-us">Contact us</Link>
          </li>
        </ul>
      </nav>

      <div className="header-actions flex items-center">
        <div className="relative cart-action w-14">
          <PiShoppingCart className="h-6 w-6 cursor-pointer" />
          <span className="absolute top-[-10px] left-4 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
            3
          </span>
        </div>
        <div className="auth-action">
          <Link to={isAssigned ? "/sign-up" : "/login"}>
            <button className="btn btn-success bg-green-500 rounded-3xl w-24 text-white">
              {isAssigned ? "Sign up" : "Login"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

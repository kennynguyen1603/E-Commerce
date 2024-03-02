import React from 'react';
import { FaApple } from "react-icons/fa6";

//bg-custom-gradient
export default function Header() {
  return (
    <div className="home container mx-auto flex justify-around p-5 text-custom-gray items-center font-bold">
      <div className="logo flex items-center space-x-1.5">
        <FaApple />
        <a href='/home'>ex.iphones</a>
      </div>
      <div className="routes flex space-x-6">
        <a href="/home">Home</a>
        <a href="/contact">Contact</a>
        <a href="/about">About</a>
      </div>
      <div className="auth flex space-x-2.5">
        <a href="/login">Login</a>
        <p>|</p>
        <a href="/signup">Sign up</a>
      </div>
    </div>
  );
}

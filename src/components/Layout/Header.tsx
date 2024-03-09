import React, { useState, useEffect } from 'react';
import { FaApple } from "react-icons/fa"; // Đảm bảo phiên bản react-icons phù hợp

export default function Header() {
  // State để theo dõi việc hiển thị header
  const [showHeader, setShowHeader] = useState(true);

  // Xử lý sự kiện cuộn trang
  useEffect(() => {
    const handleScroll = () => {
      // Hiển thị header khi ở đầu trang hoặc khi kéo xuống hơn 200px
      setShowHeader(window.scrollY > 150 || window.scrollY === 0);
    };

    // Thêm event listener cho sự kiện cuộn trang
    window.addEventListener('scroll', handleScroll);

    // Dọn dẹp event listener khi component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex z-10 absolute items-center justify-between py-5 px-5 lg:px-40 font-bold text-gray-500 w-full">
      <div className="w-7 flex items-center cursor-pointer opacity-70 hover:opacity-100">
        <FaApple />
        <img src="./src/assets/logoGrey-81085dfe.png" alt="Apple logo" />
        <p>Apple</p>
      </div>
      <div className="hidden lg:flex gap-10">
        <a aria-current="page" className="hover:text-blue-400 px-2 py-1 active" href="/">Home</a>
        <a className="hover:text-blue-400 px-2 py-1" href="/contact">Contact</a>
        <a className="hover:text-blue-400 px-2 py-1" href="/about">About</a>
      </div><div className="flex sm:gap-6 items-center relative"><a className="hover:text-blue-400 py-1 px-2" href="/login">Login</a>
        <span className="py-1">|</span>
        <a className="hover:text-blue-400 py-1 px-2" href="/register">Sign Up</a>
      </div>
    </div>
  );
}



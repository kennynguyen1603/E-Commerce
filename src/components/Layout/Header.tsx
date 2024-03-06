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
    <div className={`home container mx-auto flex justify-around p-5 text-custom-gray items-center font-bold sticky top-0 left-0 right-0 z-10`}>
      <div className="logo flex items-center space-x-1.5">
        <FaApple />
        <a href='/home'>ex.iphones</a>
      </div>
      <div className="routes flex space-x-6">
        <a href="/home">Home</a>
        <a href="/contact">Contact</a>
        <a href="/about">About</a>
        <a href="/products">Products</a>
      </div>
      <div className="auth flex space-x-2.5">
        <a href="/login">Login</a>
        <p>|</p>
        <a href="/signup">Sign up</a>
      </div>
    </div>
  );
}

// components/Header.jsx
import React from "react";
import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black via-black/80 to-transparent text-white px-6 py-4 flex items-center justify-between">

  {/* Left Logo */}
  <div className="flex items-center space-x-2">
    <a className="navbar-brand d-lg-none mx-auto" href="#">
        <img src={Logo} alt="Logo" width="100" height="25" />
    </a>
    <span className="text-sm text-gray-200">Media Center</span>
  </div>

  {/* Middle Nav Items */}
  <div className="flex items-center space-x-6 ml-24 text-sm">
    <div className="flex items-center space-x-1 cursor-pointer">
      <span>English</span>
      <span>▼</span>
    </div>
    <div className="flex items-center space-x-1 cursor-pointer">
      <span role="img" aria-label="India">🇮🇳</span>
      <span>India</span>
    </div>
    <a href="#" className="hover:underline">Newsroom</a>
    <div className="flex items-center space-x-1 cursor-pointer">
      <span>Resources</span>
      <span>▼</span>
    </div>
  </div>

  {/* Right Buttons */}
  <div className="flex items-center space-x-4 text-sm">
    <button className="border border-white px-4 py-1 rounded hover:bg-white hover:text-black">Apply</button>
    <button className="bg-red-600 px-4 py-1 rounded hover:bg-red-700">Press Log In</button>
  </div>
</header>

  );
};

export default Header;

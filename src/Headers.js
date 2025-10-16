import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide cursor-pointer">
          FlyHigh Airlines
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
         <Link to="/" style={{ color: "white", marginRight: "15px" }}>H</Link>
      <Link to="/flights" style={{ color: "white", marginRight: "15px" }}>Flights</Link>
      <Link to="/about" style={{ color: "white" }}>About</Link>
    </nav>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="bg-yellow-400 text-blue-900 font-semibold px-4 py-2 rounded hover:bg-yellow-500 transition duration-300">
            Login
          </button>
          <button className="bg-transparent border border-yellow-400 text-yellow-400 font-semibold px-4 py-2 rounded hover:bg-yellow-400 hover:text-blue-900 transition duration-300">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
// src/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        ✈️ <span>SkyFly Airlines</span>
      </div>
      <nav className="nav-links">
        <Link to="/Home">Home</Link>
        <Link to="/flights">Flights</Link>
        <Link to="/offers">Offers</Link>
        <Link to="/about">About</Link>
      </nav>
      <div className="auth-buttons">
        <Link to="/notification" className="login-btn">
          Login
        </Link>
        <Link to="/signup" className="signup-btn">
          Sign Up
        </Link>
      </div>
    </header>
  );
};

export default Header; // ✅ required

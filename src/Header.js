import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
 ///MY CHANGES


const Header = () => {
  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <div className="logo">FlyHigh Airlines</div>

        {/* Navigation */}
        <nav className="nav">
        
       
          <Link to="/" style={{ color: "white", marginRight: "15px" }}>Home</Link>
                <Link to="/flights" style={{ color: "white", marginRight: "15px" }}>Flights</Link>
                <Link to="/notification" style={{ color: "white" }}>Notification</Link>  
                <Link to="/offers" style={{ color: "white" }}>Offers</Link>
                <Link to="/about" style={{ color: "white" }}>About Us</Link>

          
        </nav>

        {/* Buttons */}
        <div className="auth-buttons">
         <Link to="/userlogin" style={{ color: "white" }}>Login</Link>  
          <button className="signup-btn">Sign Up</button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="mobile-menu">
          <span>&#9776;</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
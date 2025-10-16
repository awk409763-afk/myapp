import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ background: "#007bff", padding: "10px", color: "white" }}>
      {/* <h3 style={{ display: "inline", marginRight: "20px" }}>✈️ SkyFly</h3>
      <Link to="/" style={{ color: "white", marginRight: "15px" }}>He</Link>
      <Link to="/flights" style={{ color: "white", marginRight: "15px" }}>Flights</Link>
      <Link to="/about" style={{ color: "white" }}>About</Link> */}
    </nav>
  );
}

export default Navbar;
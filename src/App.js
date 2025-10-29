// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import FlightSearch from "./FlightSearch"; // ✅ correct spelling
import Offers from "./Offers";
import About from "./About";
import Notification from "./Notification";
import SignUp from "./SignUp";
import backgroundVideo from "./assets/background.mp4"; // ✅ adjust path if needed
import "./App.css";
import Home from "./Home";
//
function App() {
  return (
    <div className="App">
      <video className="background-video" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Router>
        <Header />
        <Routes>
          <Route path="/flights" element={<FlightSearch />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/about" element={<About />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App; // ✅ REQUIRED

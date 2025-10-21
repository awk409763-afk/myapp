import React, { useState } from "react";
import "./App.css";
import backgroundVideo from './assets/background.mp4';

import Counter from "./Counter"
import Header from "./Header";
import Notification from './Notification';
import FligtSearch from './FlightSearch';
import AIAssistant from './AIAssistant';
//import { BrowserRouter, Routes, Route } from "react-router-dom";
//import ThemeToggle from "./ThemeToggle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Offers from "./Offers";
import About from "./About";


function App() {

  //hhhdfndgn
  return(
     
     <><video className="background-video" autoPlay loop muted>
      <source src={backgroundVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video><Router>
      <Header />
      <Routes>
        

      
  
        {/* Default or Home route */}
        <Route path="/" element={<h2>Welcome to SkyFly Airlines ✈️</h2>} />

        {/* Flight search route */}
        <Route path="/flights" element={<FligtSearch />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/about" element={<About />} />
        <Route path="/notification" element={<Notification/>} />
        <Route path="/userlogin" element={<Notification title="User Portal Login" />} />
      </Routes>
      </Router></>
   
  )
}

export default App;
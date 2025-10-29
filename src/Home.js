import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import plane from "./plane.png"; // ✈️ place a plane image in src folder
import travel from "./travel.jpg"; // 🌍 optional travel bg image

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            Welcome to <span>SkyFly Airlines</span>
          </h1>
          <p>
            Experience luxury in the skies. Book your next adventure with ease,
            comfort, and class.
          </p>
          <Link to="/flights">
            <button className="cta-btn">Book a Flight ✈️</button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Fly with SkyFly?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>🕓 On-Time Guarantee</h3>
            <p>We ensure your journey runs smoothly and on schedule.</p>
          </div>
          <div className="feature-card">
            <h3>💺 Comfort Class</h3>
            <p>Luxurious seating with extra legroom and world-class service.</p>
          </div>
          <div className="feature-card">
            <h3>🌍 Global Reach</h3>
            <p>Connecting you to 120+ destinations around the world.</p>
          </div>
        </div>
      </section>

      {/* Destination Highlights */}
      <section className="destinations">
        <h2>Top Destinations</h2>
        <div className="dest-grid">
          <div
            className="dest-card"
            style={{ backgroundImage: `url(${travel})` }}
          >
            <div className="overlay">
              <h3>Paris</h3>
              <p>Romance in the city of lights.</p>
            </div>
          </div>
          <div
            className="dest-card"
            style={{ backgroundImage: `url(${travel})` }}
          >
            <div className="overlay">
              <h3>Tokyo</h3>
              <p>Tradition meets technology.</p>
            </div>
          </div>
          <div
            className="dest-card"
            style={{ backgroundImage: `url(${travel})` }}
          >
            <div className="overlay">
              <h3>New York</h3>
              <p>The city that never sleeps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Take Off?</h2>
        <p>Book your flight now and enjoy exclusive offers and discounts!</p>
        <Link to="/signup">
          <button className="cta-btn-alt">Sign Up & Save 💸</button>
        </Link>
      </section>
    </div>
  );
};

export default Home;

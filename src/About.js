// src/components/About.js
import React from "react";
import "./About.css"; // ✅ Import CSS

function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>✈️ About SkyFly Airlines</h1>
        <p>Your journey, our passion.</p>
      </header>

      <section className="about-section fade-in">
        <h2>Who We Are</h2>
        <p>
          SkyFly Airlines is one of India’s leading air travel providers, connecting
          <strong> 120+ destinations</strong> globally. Established in 2010, we combine
          technology and hospitality to deliver the most comfortable flying experience.
        </p>
      </section>

      <section className="about-section slide-up">
        <h2>Our Mission</h2>
        <p>
          To make air travel accessible, affordable, and enjoyable for all travelers.
          Every flight we operate is driven by our values of safety, reliability, and care.
        </p>
      </section>

      <section className="about-section zoom-in">
        <h2>Why Choose SkyFly?</h2>
        <div className="about-cards">
          <div className="card">
            <h3>💺 Comfort</h3>
            <p>Spacious seating and personalized in-flight entertainment.</p>
          </div>
          <div className="card">
            <h3>🕓 On-Time</h3>
            <p>We pride ourselves on maintaining an on-time record of 97%.</p>
          </div>
          <div className="card">
            <h3>🌍 Sustainability</h3>
            <p>Eco-friendly operations with reduced carbon emissions.</p>
          </div>
          <div className="card">
            <h3>🤝 Customer Care</h3>
            <p>24/7 assistance to ensure your journey is smooth and stress-free.</p>
          </div>
        </div>
      </section>

      <section className="about-section fade-in">
        <h2>Contact Us</h2>
        <p>
          📍 Headquarters: Bhubaneswar, India<br />
          📞 Customer Care: +91 98765 43210<br />
          📧 Email: <a href="mailto:support@skyflyairlines.com">support@skyflyairlines.com</a>
        </p>
      </section>

      <footer className="about-footer">
        <p>© 2025 SkyFly Airlines. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default About;

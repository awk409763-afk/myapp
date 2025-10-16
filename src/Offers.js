// src/components/Offers.js
import React from "react";
import "./Offers.css"; // ✅ Import the CSS

function Offers() {
  const offers = [
    {
      id: 1,
      title: "Fly More, Pay Less!",
      desc: "Get 20% off on all domestic flights booked before October 31st.",
      img: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=900&q=60",
      code: "FLY20",
    },
    {
      id: 2,
      title: "Student Travel Discount 🎓",
      desc: "Exclusive 25% discount for students traveling with valid ID cards.",
      img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=900&q=60",
      code: "STUDENT25",
    },
    {
      id: 3,
      title: "Couple Getaway 💕",
      desc: "Book two tickets together and get a flat ₹1500 off your next trip!",
      img: "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&w=900&q=60",
      code: "COUPLE1500",
    },
    {
      id: 4,
      title: "Fly Green 🌿",
      desc: "Join our eco-friendly flights and earn extra SkyPoints rewards!",
      img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=60",
      code: "ECOPOINTS",
    },
  ];

  return (
    <div className="offers-container">
      <h1 className="offers-title">🌟 Exclusive Airline Offers 🌟</h1>
      <p className="offers-subtitle">Grab your deal before it flies away!</p>

      <div className="offers-grid">
        {offers.map((offer) => (
          <div key={offer.id} className="offer-card fade-in">
            <img src={offer.img} alt={offer.title} className="offer-img" />
            <div className="offer-content">
              <h3>{offer.title}</h3>
              <p>{offer.desc}</p>
              <button className="offer-btn">
                Use Code: <span>{offer.code}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <footer className="offers-footer">
        ✈️ Hurry! Offers valid till stock lasts.
      </footer>
    </div>
  );
}

export default Offers;

// src/SignUp.js
import React, { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    address: "",
    aadhaar: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateAge = (dob) => {
    if (!dob) return "";
    const birthDate = new Date(dob);
    const ageDiff = Date.now() - birthDate.getTime();
    return Math.abs(new Date(ageDiff).getUTCFullYear() - 1970);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const age = calculateAge(formData.dob);
    alert(`✅ Registration Successful! 
    Name: ${formData.firstName} ${formData.lastName}
    Gender: ${formData.gender}
    Age: ${age}
    Address: ${formData.address}
    Aadhaar: ${formData.aadhaar}`);
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up for SkyFly ✈️</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />

          <textarea
            name="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="aadhaar"
            placeholder="Aadhaar Number"
            value={formData.aadhaar}
            onChange={handleChange}
            required
          />

          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

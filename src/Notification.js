import React, { useState } from "react";
import "./NotificationService.css";

const NotificationService = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

    const isFormValid = username.trim() !== "" && password.trim() !== "";


  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Username: ${username}\nPassword: ${password}`);
    // Here you can add your login API logic
  };

  return (
    <div className="notification-container">
      <h2 className="title">Notification Service Login</h2>
      <form className="notification-form" onSubmit={handleLogin}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
  type="submit"
  className={`login-btn ${isFormValid ? "enabled" : "disabled"}`}
  onClick={handleLogin}
>
  Login
</button>
      </form>
    </div>
  );
};

export default NotificationService;
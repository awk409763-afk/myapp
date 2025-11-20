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
// App.js

import { useAuth } from "react-oidc-context";

function App() {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = "5uujpr4j6kqf4nmsaf3j581fih";
    const logoutUri = "<logout uri>";
    const cognitoDomain = "https://ap-south-14ytzmefwt.auth.ap-south-1.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div>
        <pre> Hello: {auth.user?.profile.email} </pre>
        <pre> ID Token: {auth.user?.id_token} </pre>
        <pre> Access Token: {auth.user?.access_token} </pre>
        <pre> Refresh Token: {auth.user?.refresh_token} </pre>

        <button onClick={() => auth.removeUser()}>Sign out</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => auth.signinRedirect()}>Sign in</button>
      <button onClick={() => signOutRedirect()}>Sign out</button>
    </div>
  );
}

export default App;
//
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import "./Landing.css";

function Landing() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginButtonClick = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleRegisterButtonClick = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  return (
    <Router>
      <div className="container">
        <div className="form">
          {/* Conditional rendering of Landing component */}
          {(!showLogin && !showRegister) && (
            <div>
              <h1>Welcome to OPEN COMMUNITY</h1>
            </div>
          )}
          {!showLogin && !showRegister && (
            <div className="btn-container">
              <button className="btn" onClick={handleLoginButtonClick}>
                Login
              </button>
              <button className="btn" onClick={handleRegisterButtonClick}>
                Register
              </button>
            </div>
          )}
        </div>
      </div>

      {showLogin && <Login />}
      {showRegister && <Register />}
    </Router>
  );
}

export default Landing;

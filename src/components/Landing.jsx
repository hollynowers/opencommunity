import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Landing from "./Landing";
import Login from "./Login";
import "./Landing.css";
import Register from "./Register"

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginButtonClick = () => {
    setShowLogin(true);
  };

  return (
    <Router>
      <div className="container">
        <div className="form">
          {!showLogin && (
            <div className="btn-container">
              <button className="btn" onClick={handleLoginButtonClick}>
                Login
              </button>
              <button className="btn">Register</button>
            </div>
          )}
        </div>
      </div>

      {showLogin && <Login />}
    </Router>
  );
}

export default App;

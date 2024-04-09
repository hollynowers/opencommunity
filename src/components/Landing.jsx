import React, { useState } from "react";
import "./Landing.css"; // Assuming your CSS file is named styles.css

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Logic for handling login
    setLoggedIn(true);
  };

  const handleRegister = () => {
    // Logic for handling registration
    console.log("Register clicked");
  };

  return (
    <div className="container">
      <div className="form">
        <div className="btn-container">
          <button className="btn" onClick={handleLogin}>Login</button>
          <button className="btn" onClick={handleRegister}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default App;

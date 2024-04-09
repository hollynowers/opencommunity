import logo from "./logo.svg";

import Sidebar from "./components/Sidebar";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login"

import React, { useState, useEffect } from "react";

function App() {
  return (
    <div classname="App">
      <Sidebar/>
      <Login/>
    </div>

  );
}

export default App;

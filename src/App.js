import logo from "./logo.svg";

import Sidebar from "./components/Sidebar";
import "./App.css";
import Register from "./components/Register";

import React, { useState, useEffect } from "react";
import CommunityCard from "./components/CommunityCard";
import CommunityGrid from "./components/CommunityGrid";
import CommunityView from "./components/CommunityView";

function App() {
  return (
    <div classname="App">
      <CommunityView />
    </div>
  );
}

export default App;

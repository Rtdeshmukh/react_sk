// src/App.js
import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import MainPanel from "./components/MainPanel";
import CreateCard from "./components/CreateCard";
import MyCard from "./components/MyCard"; // Assuming you will implement this
import ProfileSettings from "./components/ProfileSettings"; // Assuming you will implement this

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPanel />} />
        <Route path="/create-card" element={<CreateCard />} />
        <Route path="/my-card" element={<MyCard />} />
        <Route path="/profile-settings" element={<ProfileSettings />} />
      </Routes>
    </Router>
  );
}

export default App;

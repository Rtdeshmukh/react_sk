// src/components/MainPanel.js
import React from "react";
import { Link } from "react-router-dom";

const MainPanel = () => {
  return (
    <div className="main-panel">
      <img src="https://unsplash.it/500/500" alt="Logo" className="image" />
      <div className="button-container">
        <Link to="/my-card">
          <button>My Card</button>
        </Link>
        <Link to="/create-card">
          <button>Create New Card</button>
        </Link>
        <Link to="/profile-settings">
          <button>Profile Settings</button>
        </Link>
      </div>
    </div>
  );
};

export default MainPanel;

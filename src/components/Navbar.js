// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="nav-link">
        Main Panel
      </Link>
      <Link to="/my-card" className="nav-link">
        My Card
      </Link>
      <Link to="/create-card" className="nav-link">
        Create Card
      </Link>
      <Link to="/profile-settings" className="nav-link">
        Profile Settings
      </Link>
    </div>
  );
};

export default Navbar;

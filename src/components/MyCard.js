import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import "./css/myCard.css";
import whatsappIcon from "../assets/whatsapp.png";
import linkedinIcon from "../assets/linkedin.png";
import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";

const MyCard = () => {
  const location = useLocation();
  const { state } = location; // Retrieve the passed data

  if (!state) {
    return <p>No card data available!</p>;
  }

  const {
    logo,
    profilePic,
    fullName,
    designation,
    email,
    website,
    phone,
    linkedin,
    facebook,
    instagram,
    address,
  } = state;

  // If logos or images exist, create object URLs
  const logoURL = logo ? URL.createObjectURL(logo) : null;
  const profilePicURL = profilePic ? URL.createObjectURL(profilePic) : null;

  // Function to handle saving contact
  // const handleSave = () => {
  //   alert("Contact Saved!");
    // Implement actual save logic here (e.g., save to local storage, database, etc.)
  };

  // Function to handle sharing contact
  const handleShare = () => {
    alert("Contact Shared!");
    // Implement actual share logic here (e.g., sharing via WhatsApp, email, etc.)
  };

  return (
    <div className="my-card">
      <Navbar />
      <h2>My Digital Card</h2>
      <div className="card-container">
        <div className="header">
          {logo && <img src={logoURL} alt="Logo" className="card-logo" />}
        </div>
        <div className="image-container">
          {profilePic && (
            <img
              src={profilePicURL}
              alt="Profile"
              className="card-profile-pic"
            />
          )}
        </div>
        <div className="info-container">
          <h3 className="full-name">{fullName}</h3>
          <p className="designation">{designation}</p>

          {/* Phone */}
          {phone && (
            <div className="info-item phone">
              <i className="fas fa-phone-alt"></i>
              <a href={`tel:${phone}`} className="clickable-link">
                {phone}
              </a>
            </div>
          )}

          {/* Email */}
          {email && (
            <div className="info-item email">
              <i className="fas fa-envelope"></i>
              <a href={`mailto:${email}`} className="clickable-link">
                {email}
              </a>
            </div>
          )}

          {/* Website */}
          {website && (
            <div className="info-item website">
              <i className="fas fa-globe"></i>
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="clickable-link"
              >
                {website}
              </a>
            </div>
          )}

          {/* Address */}
          {address && (
            <div className="info-item address">
              <i className="fas fa-map-marker-alt"></i>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="clickable-link"
              >
                {address}
              </a>
            </div>
          )}

          {/* Social Icons */}
          <div className="social-icons">
            <a
              href={`https://wa.me/${phone}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="social-icon" />
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
            </a>
            <a href={facebook} target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" className="social-icon" />
            </a>
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <img
                src={instagramIcon}
                alt="Instagram"
                className="social-icon"
              />
            </a>
          </div>

          <div className="save-share-icons">
            {/* Save icon */}
            <button className="save-share-button" onClick={handleSave}>
              <i className="fas fa-save save-share-icon" title="Save">
                {" "}
              </i>
              <span>Save Contact</span>
            </button>

            {/* Share icon */}
            <button className="save-share-button" onClick={handleShare}>
              <i className="fas fa-share-alt save-share-icon" title="Share"></i>
              <span>Share Contact</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCard;

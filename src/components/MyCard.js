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
  const { state } = location;

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

  const logoURL = logo ? URL.createObjectURL(logo) : null;
  const profilePicURL = profilePic ? URL.createObjectURL(profilePic) : null;

  // Function to generate the vCard (VCF) format
  const generateVCF = async () => {
    const getBase64Image = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result.split(",")[1]);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });

    let base64Image = "";
    if (profilePic) {
      try {
        base64Image = await getBase64Image(profilePic);
      } catch (err) {
        console.error("Error converting image to Base64:", err);
      }
    }

    const formattedAddress = address ? `;;${address.replace(/,/g, ";")}` : "";

    return `
BEGIN:VCARD
VERSION:3.0
FN:${fullName || ""}
TEL:${phone || ""}
EMAIL:${email || ""}
URL:${website || ""}
ADR:${formattedAddress}
${base64Image ? `PHOTO;ENCODING=BASE64;TYPE=JPEG:${base64Image}` : ""}
END:VCARD
    `.trim();
  };

  // Function to download the VCF file
  const downloadVCF = (vCardData) => {
    const blob = new Blob([vCardData], { type: "text/vcard; charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${fullName}_contact.vcf`;
    link.click();
  };

  // Function to handle saving contact as VCF
  const handleSave = async () => {
    try {
      const vCardData = await generateVCF();
      if (!vCardData) {
        console.error("Failed to generate VCF Data.");
        return;
      }
      downloadVCF(vCardData);
    } catch (err) {
      console.error("Error in Save Contact:", err);
    }
  };

  // Function to handle sharing contact
  const handleShare = () => {
    alert("Share functionality is under development.");
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

          {phone && (
            <div className="info-item phone">
              <i className="fas fa-phone-alt"></i>
              <a href={`tel:${phone}`} className="clickable-link">
                {phone}
              </a>
            </div>
          )}

          {email && (
            <div className="info-item email">
              <i className="fas fa-envelope"></i>
              <a href={`mailto:${email}`} className="clickable-link">
                {email}
              </a>
            </div>
          )}

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

          <div className="social-icons">
            {phone && (
              <a
                href={`https://wa.me/${phone}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={whatsappIcon}
                  alt="WhatsApp"
                  className="social-icon"
                />
              </a>
            )}
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  className="social-icon"
                />
              </a>
            )}
            {facebook && (
              <a href={facebook} target="_blank" rel="noopener noreferrer">
                <img
                  src={facebookIcon}
                  alt="Facebook"
                  className="social-icon"
                />
              </a>
            )}
            {instagram && (
              <a href={instagram} target="_blank" rel="noopener noreferrer">
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="social-icon"
                />
              </a>
            )}
          </div>

          <div className="save-share-icons">
            <button
              className="save-share-button"
              onClick={handleSave}
              aria-label="Save Contact"
            >
              <i className="fas fa-save save-share-icon"></i>
              <span>Save Contact</span>
            </button>
            <button
              className="save-share-button"
              onClick={handleShare}
              aria-label="Share Contact"
            >
              <i className="fas fa-share-alt save-share-icon"></i>
              <span>Share Contact</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCard;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./css/createCard.css";

const CreateCard = () => {
  const [formData, setFormData] = useState({
    logo: null,
    profilePic: null,
    fullName: "",
    companyName: "",
    designation: "",
    email: "",
    website: "",
    phone: "",
    linkedin: "",
    facebook: "",
    instagram: "",
    address: "",
    mapLink: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);

    // Pass all form data to MyCard.js
    navigate("/my-card", { state: formData });
  };

  return (
    <div className="create-card">
      <Navbar />
      <h2>Create Digital Card</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Logo:</label>
          <input
            type="file"
            name="logo"
            accept="image/*"
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label>Profile Picture:</label>
          <input
            type="file"
            name="profilePic"
            accept="image/*"
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter full name"
          />
        </div>
        <div className="input-container">
          <label>Company Name:</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Enter company name"
          />
        </div>
        <div className="input-container">
          <label>Designation:</label>
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            placeholder="Enter designation"
          />
        </div>
        <div className="input-container">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>
        <div className="input-container">
          <label>Website:</label>
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="Enter website URL"
          />
        </div>
        <div className="input-container">
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
          />
        </div>
        <div className="input-container">
          <label>LinkedIn:</label>
          <input
            type="text"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            placeholder="Enter LinkedIn URL"
          />
        </div>
        <div className="input-container">
          <label>Facebook:</label>
          <input
            type="text"
            name="facebook"
            value={formData.facebook}
            onChange={handleChange}
            placeholder="Enter Facebook URL"
          />
        </div>
        <div className="input-container">
          <label>Instagram:</label>
          <input
            type="text"
            name="instagram"
            value={formData.instagram}
            onChange={handleChange}
            placeholder="Enter Instagram URL"
          />
        </div>
        <div className="input-container">
          <label>Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter address"
          />
        </div>
        <div className="input-container">
          <label>Address Map Link:</label>
          <input
            type="text"
            name="mapLink"
            value={formData.mapLink}
            onChange={handleChange}
            placeholder="Enter Google Map link"
          />
        </div>
        <div className="button-container">
          <button type="submit">Add My Information to Card</button>
        </div>
      </form>
    </div>
  );
};

export default CreateCard;

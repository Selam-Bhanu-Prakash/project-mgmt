import React, { useState } from "react";
import "./Home.css";
import Call from "../../images/call.png";
import Mail from "../../images/mail.png";
import { useLoadScript, GoogleMap } from "@react-google-maps/api";
import { useMemo } from "react";

const ContactUs = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyA9UgDgCPTKfyV8PvcZxqRo9GmdlwHgAbc",
  });
  console.log("isloaded val: ", isLoaded);
  const center = useMemo(() => ({ lat: 14.146319, lng: 79.850388 }), []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    organizationName: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      contactNumber: "",
      organizationName: "",
      message: "",
    });
  };

  return (
    <div className="contact-div">
      <div className="left-side">
        <h3>Reach Us</h3>
        <p style={{ fontSize: "12px" }}>
          Fill up the form and we will get back to you within 24 hours
        </p>
        <div className="contact">
          <p style={{ fontSize: "12px" }}>
            <span>
              <img
                src={Call}
                alt="phone"
                style={{ marginRight: "20px", height: "15px", width: "15px" }}
              />
            </span>
            +91 8096920610
          </p>
          <p style={{ fontSize: "12px" }}>
            <span>
              <img
                src={Mail}
                alt="email"
                style={{ marginRight: "20px", height: "18px", width: "18px" }}
              />
            </span>
            selambhanuprakash02@gmail.com
          </p>
        </div>

        <div className="google-map">
          {!isLoaded ? (
            <h1>Loading...</h1>
          ) : (
            <GoogleMap
              mapContainerClassName="map-container"
              center={center}
              zoom={10}
            />
          )}
        </div>
      </div>
      <div className="right-side">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="f-div1">
              <label htmlFor="name">Your name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <label htmlFor="email">Email address:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              
            </div>
            <div>
              <label htmlFor="contactNumber">Contact number:</label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="organizationName">Your organization name:</label>
              <input
                type="text"
                id="organizationName"
                name="organizationName"
                value={formData.organizationName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

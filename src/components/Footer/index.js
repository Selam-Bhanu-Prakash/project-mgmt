import React from "react";
import "./Footer.css";
import LinedIn from "../../images/linkedin.png";
import Facebook from "../../images/facebook.png";
import Instagram from "../../images/instagram.png";
import Twitter from "../../images/twitter.png";
import YouTube from "../../images/youtube.png";

const Footer = () => {
  return (
    <div className="footer-div">
      <div className="footer-1">
        <div>
            <h5>WAYFINDER</h5>
            <p>Project management Private Limited,</p>
            <p>Plot # C-27, SIPCOT Industrial Park,</p>
            <p>Irugattukottai, Sriperumbudur,</p>
            <p>Tamilnadu, India</p>
            <p>Zip Code: 602 117</p>
        </div>
        <div>
            <h5>R&D</h5>
            <p>Services</p>
            <p>Infrastructure</p>
            <p>Case Studies</p>
        </div>
        <div>
            <h5>Manufacturing</h5>
            <p>Capability</p>
            <p>Quality</p>
            <p>Facility</p>
            <p>Industry.0</p>
        </div>
        <div>
            <h5>Products</h5>
            <p>Products</p>
            <p>Food Supplements</p>
            <p>Archimedis Branded</p>
        </div>
        <div>
            <h5>Digital</h5>
            <p>Solutions</p>
            <p>Product Development</p>
            <p>Quality & Compliance</p>
        </div>
        <div>
            <h5>Contact</h5>
            <p>Contact us</p>
            <p>Call +91 44 4717 1111</p>
            <p>care@archimedis.net</p>
        </div>
      </div>
      <div className="footer-2">
        <div className="social-media">
            <img src={LinedIn} alt="linkedin" className="social-media-logo" style={{width:"20px", height: "20px",marginTop:"10px"}}/>
            <img src={Facebook} alt="facebook" className="social-media-logo"/>
            <img src={Instagram} alt="instagram" className="social-media-logo"/>
            <img src={Twitter} alt="twitter" className="social-media-logo"/>
            <img src={YouTube} alt="youtube" className="social-media-logo"/>
        </div>
        <div className="copy-tag">
            <p>Copyright © 2021 wayfinders. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

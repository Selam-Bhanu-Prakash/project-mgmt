import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import LandingImage from "../../images/logo512.png";
import VideoSVG from "../../images/video.png";
import Carousel from "react-bootstrap/Carousel";

const Sponsors = () => {
  return (
    <div className="sponsors-main-div">
      <div>
        <p className="sponsors-title">Trusted by Industry Leaders Globally </p>
        <p>95% Repeat Business. 100% Client Retention</p>

        <Carousel fade>
          <Carousel.Item>
          <img className="d-block w-100" src={LandingImage} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
          <img className="d-block w-100" src={VideoSVG} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
          <img className="d-block w-100" src={LandingImage} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div></div>
    </div>
  );
};

export default Sponsors;

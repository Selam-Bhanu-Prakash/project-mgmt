import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import LandingImage from "../../images/logo512.png";
import VideoSVG from "../../images/video.png";
import ArrowButton from "../../images/up-arrow.png"
const Landing = () => {
  return (
    <div>
      <div className="landing-main-div">
        <div className="ldiv-1">
          <h3 className="landing-main-div-h3">Project Management Tool</h3>
          <p className="board-main-div-p">
            Scrum boards help agile teams break large, complex projects into
            manageable pieces of work so focused teams ship faster.
          </p>
          <div className="landing-div-buttons">
            <button type="button" class="btn btn-info btn-white-text">
              <span>
                <img
                  className="video-png"
                  src={VideoSVG}
                  alt="Image for video"
                />
              </span>
              Watch Video
            </button>
            <button type="button" class="btn btn-outline-info contact-btn">
              Contact Us
            </button>
          </div>
        </div>
        <div className="ldiv-2">
          <img
            className="landing-main-div-image"
            src={LandingImage}
            alt="Image for landing page"
          />
        </div>
      </div>
      <div className="ldiv-3">
        <button type="button" class="btn btn-outline-info contact-btn arrow-btn"><img src={ArrowButton} alt="up-arrow" className="up-arrow"/></button>
      </div>
    </div>
  );
};

export default Landing;

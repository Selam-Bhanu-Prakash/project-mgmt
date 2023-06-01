import React from "react";
import "./Home.css";
import Boards from "./Boards";
import TestImage from "../../images/download.jpeg";
import Landing from "./Landing";
import Sponsors from "./Sponsors";
import Backlog from "./Backlog";
import Development from "./Development";
import Digital from "./Digital";
import Count from "./Count";
import WayFinder from "./WayFinder";
import ContactUs from "./ContactUs";
const Home = () => {
  return (
    <div>
      <Landing />
      <Sponsors />

      <div className="main-div">
        <div className="landing-div"></div>

        <h1 className="main-div-h1">What we do ?</h1>

        <div className="board-div">
          <Boards />
          <div className="half">
            <div className="border-div">
              <img className="half-img" src={TestImage} alt="TestImage" />
            </div>
          </div>
        </div>

        <div className="board-div">
          <div className="half-reverse">
            <div className="border-div-reverse">
              <img
                className="half-img-reverse"
                src={TestImage}
                alt="TestImage"
              />
            </div>
          </div>
          <Backlog />
        </div>

        <div className="board-div">
          <Development />
          <div className="dev-half">
            <div className="border-div">
              <img className="half-img" src={TestImage} alt="TestImage" />
            </div>
          </div>
        </div>

        <div className="board-div">
          <div className="half-digital">
            <div className="border-div-reverse">
              <img
                className="half-img-digital"
                src={TestImage}
                alt="TestImage"
              />
            </div>
          </div>
          <Digital />
        </div>
      </div>

      <Count />
      <WayFinder />
      <div className="ext-contact">
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;

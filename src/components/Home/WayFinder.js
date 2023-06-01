import React from "react";
import "./Home.css";
import Setting from "../../images/setting.png";
import Idea from "../../images/idea.png";
import Thunder from "../../images/thunder.png";
import Infinity from "../../images/infinity.png";

const WayFinder = () => {
  return (
    <div className="way-div">
      <div className="way-inner-div">
        <h1>Why WayFinder ?</h1>
        <p>
          Our single-minded focus on superior quality leading to client success.
        </p>
      </div>
      <div className="way-inner-div1">
        <div className="finder">
          <div 
            className="w-img-bg"
            style={{ backgroundColor: "rgba(8, 240, 243, 0.3)" }}
          >
            <img src={Setting} alt="settings" className="w-img" />
            
          </div>
          <h6>Cutomize<br />Team work</h6>
        </div>
        <div className="finder">
          <div
            className="w-img-bg"
            style={{ backgroundColor: "rgba(255, 195, 4, 0.3)" }}
          >
            <img src={Idea} alt="ideas" className="w-img" />
            
          </div>
          <h6>Work Flow</h6>
        </div>
        <div className="finder">
          <div
            className="w-img-bg"
            style={{ backgroundColor: "rgba(255, 4, 247, 0.3)" }}
          >
            <img src={Thunder} alt="thunders" className="w-img" />
            
          </div>
          <h6>Automation</h6>
        </div>
        <div className="finder">
          <div
            className="w-img-bg"
            style={{ backgroundColor: "rgba(169, 4, 255, 0.3)" }}
          >
            <img src={Infinity} alt="infinite" className="w-img" />
            
          </div>
          <h6>Consistent Execution</h6>
        </div>
      </div>
      <h1 style={{marginTop:"100px",marginBottom:"100px", textAlign:"center"}}>Contact us</h1>
    </div>
  );
};

export default WayFinder;

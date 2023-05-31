import React from "react";
import "./Home.css";
import RightArrow from "../../images/right.png";
const Development = () => {
  return (
    <div className="board-main-div">
      <h1 className="development-main-div-h1">Development</h1>
      <p className="board-main-div-p">
        Create User Stories & Issues, Plan Sprints, & Distribute Tasks Across
        Your Software Team. Explore Various "Per User" Pricing Options, So
        You'll Never Pay For More Than You Need. Integrates w/ Other Tools. Open
        DevOps. Scrum Boards. Connect Issues to Code.
      </p>
      <div className="development-btn">
        <button type="button" class="btn btn-info viewmore-btn">
          <span>
            View More
            <img src={RightArrow} alt="right-arrow" className="right-arrow" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Development;

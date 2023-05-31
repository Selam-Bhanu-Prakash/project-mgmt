import React from "react";
import "./Home.css";
import RightArrow from "../../images/right.png";
const Backlog = () => {
  return (
    <div className="board-main-div-reverse">
      <h1 className="board-main-div-h1">Backlogs</h1>
      <p className="board-main-div-p">
        A backlog is a list of tasks required to support a larger strategic
        plan. For example, a product development context contains a prioritized
        list of items. The product team agrees to work on these projects next.
        Typical items on a product backlog include user stories, changes to
        existing functionality, and bug fixes.
      </p>
      <div className="backlog-btn">
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

export default Backlog;

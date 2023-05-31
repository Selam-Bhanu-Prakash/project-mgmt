import React from "react";
import "./Home.css";
import RightArrow from "../../images/right.png";
const Boards = () => {
  return (
    <div className="board-main-div">
      <h1 className="board-main-div-h1">Boards ?</h1>
      <p className="board-main-div-p">
        Way Finder Software is flexible enough to mold to your team's own unique
        way of working, whether it is Scrum, Kanban, or something in
        between.Agile and DevOps teams can use flexible kanban boards to
        visualize workflows, limit work-in-progress, and maximize efficiency as
        a team. Templates make it easy to get started quickly and customize as
        you go.Scrum boards help agile teams break large, complex projects into
        manageable pieces of work so focused teams ship faster.
      </p>
      <div>
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

export default Boards;

import React from "react";
import "./Home.css";
import RightArrow from "../../images/right.png";
const Digital = () => {
  return (
    <div className="board-main-div-reverse">
      <h1 className="digital-main-div-h1">Digital</h1>
      <p className="board-main-div-p">
        "Digital by Default; Manual by Exception" has become the norm in the
        Life Sciences industry. From DevOps to Industry 4.0, our digital
        business unit offers digital product development, product support, ERP
        solutions, smart dispensing, environmental monitoring and custom
        implementation services.
      </p>
      <div className="digital-btn">
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

export default Digital;

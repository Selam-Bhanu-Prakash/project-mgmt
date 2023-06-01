import React from "react";
import "./Home.css";
import GropIcon from "../../images/group-users.png";
import Suitecase from "../../images/suitecase.png";
import Products from "../../images/products.png";

const Count = () => {
  return (
    <div className="count-div">
      <div className="dummy">
        <div className="inner-count">
          <img src={GropIcon} alt="group-icon" className="count-img" />
          <h1 className="count-h1">800+</h1>
          <p className="count-p">Employees</p>
        </div>
        <div className="inner-count">
          <img src={Suitecase} alt="group-icon" className="count-img" />
          <h1 className="count-h1">100+</h1>
          <p className="count-p">Clients</p>
        </div>
        <div className="inner-count">
          <img src={Products} alt="group-icon" className="count-img" />
          <h1 className="count-h1">200+</h1>
          <p className="count-p">Products</p>
        </div>
      </div>
    </div>
  );
};

export default Count;

import BrandLogo from "../../images/logo.jpg";
import "./Navigation.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Navigation = () => {
  return (
    <div className="navigation-div">
      <div className="inner-navigation-div">
        <img className="brand-logo" src={BrandLogo} alt="Logo for brand" />
        <div className="access-btn">
          <button type="button" class="btn btn-outline-info">
            GET ACCESS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

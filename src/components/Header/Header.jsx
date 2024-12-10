import React from "react";
import "./Header.css";
import Logo from "../../assets/images/logo.jpeg";

const Header = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-2">
          <img src={Logo} alt="" />
        </div>

        <div className="col-sm-5">
          <div className="headerSearch d-flex align-items-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import {CiSearch} from "react-icons/ci";
import {CiShoppingCart} from "react-icons/ci";
import {Link} from "react-router-dom";

function UpperNavbar() {
  return (
    <div className="upper-navbar">
      <div className="upper-navbar-items">
        <Link to="/">
          <div className="logo-img">
            <p className="logo-upper">Lavishly</p>
            <p className="logo-lower">"your shopmate"</p>
          </div>
        </Link>
        <div className="navigation-items">
          <CiSearch
            size={"1.5rem"}
            className="navbar-icons"
            style={{marginTop: "0.3rem"}}
          />
          <CiShoppingCart size={"1.8rem"} className="navbar-icons" />
          <Link to="/login" style={{color: "black"}}>
            <div className="login-nav-btn">Login</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpperNavbar;

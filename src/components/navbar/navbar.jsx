import React from "react";
import "./navbar.css";
import {CiSearch} from "react-icons/ci";
import {CgProfile} from "react-icons/cg";
import {CiShoppingCart} from "react-icons/ci";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="upper-navbar">
        <div className="upper-navbar-items">
          <a href="/">
            <div className="logo-img">
              <p className="logo-upper">ShoppingDost</p>
              <p className="logo-lower">"your shopmate"</p>
            </div>
          </a>
          <div className="navigation-items">
            <CiSearch size={"1.5rem"} className="navbar-icons" />
            <CgProfile size={"1.5rem"} className="navbar-icons" />
            <CiShoppingCart size={"1.8rem"} className="navbar-icons" />
          </div>
        </div>
      </div>
      <div className="lower-navbar">
        <div className="lower-navbar-contents">
          <div className="electronics">ELECTRONICS</div>
          <div className="beauty">BEAUTY</div>
          <div className="home">HOME</div>
          <div className="women">WOMEN</div>
          <div className="men">MEN</div>
          <div className="vehicles">VEHICLES</div>
        </div>
      </div>
      <div className="dropdown-contents"></div>
    </nav>
  );
}

export default Navbar;

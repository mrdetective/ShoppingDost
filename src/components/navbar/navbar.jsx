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
          <div className="logo-img">
            <p className="logo-upper">ShoppingDost</p>
            <p className="logo-lower">"your shopmate"</p>
          </div>
          <div className="navigation-items">
            <CiSearch size={"1.5rem"} />
            <CgProfile size={"1.5rem"} />
            <CiShoppingCart size={"1.8rem"} />
          </div>
        </div>
      </div>
      <div className="lower-navbar">
        <div className="lower-navbar-contents">
          <span className="mobile">MOBILE</span>
          <span className="mobile">SHIRTS</span>
          <span className="mobile">PANTS</span>
          <span className="mobile">FURNITURES</span>
          <span className="m">KITCHEN</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

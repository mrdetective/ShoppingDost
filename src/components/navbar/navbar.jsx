import React from "react";
import "./navbar.css";
import {CiSearch} from "react-icons/ci";
import {CgProfile} from "react-icons/cg";
import {CiShoppingCart} from "react-icons/ci";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
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
      <div className="lower-navbar">
        <div className="lower-navbar-contents">
          <a
            href="/products/category/electronics"
            style={{color: "whitesmoke"}}>
            <div className="electronics">ELECTRONICS</div>
          </a>
          <a href="/products/category/beauty" style={{color: "whitesmoke"}}>
            <div className="beauty">BEAUTY</div>
          </a>
          <a href="/products/category/home" style={{color: "whitesmoke"}}>
            <div className="home">HOME DECOR</div>
          </a>
        </div>
      </div>
      <div className="dropdown-contents"></div>
    </nav>
  );
}

export default Navbar;

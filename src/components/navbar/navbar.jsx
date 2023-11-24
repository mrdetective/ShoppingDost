import React from "react";
import "./navbar.css";
import UpperNavbar from "../upperNavbar/upperNavbar";

function Navbar() {
  return (
    <nav className="navbar">
      <UpperNavbar />
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

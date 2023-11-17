import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-text">
        <div className="about">About</div>
        <div className="contact">Contact us</div>
        <div className="faq">FAQs</div>
        <div className="career">Career</div>
        <div className="news">News</div>
      </div>
      <div className="footer-lower-text">
        Copyright © 2023. All rights are reserved
      </div>
    </footer>
  );
}

export default Footer;

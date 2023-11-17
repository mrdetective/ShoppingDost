import React from "react";
import "./newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter-section">
      <h1 className="newsletter-heading">Newsletter</h1>
      <div className="input-btn">
        <input placeholder="your@email.com" className="newsletter-input" />
        <button className="subscribe-btn">Subscribe!</button>
      </div>
    </section>
  );
}

export default Newsletter;

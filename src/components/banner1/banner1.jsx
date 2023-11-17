import React from "react";
import "./banner1.css";
import banner1img from "../../assets/banner-1.jpg";

function Banner1() {
  return (
    <section className="banner-1-section">
      <div className="banner-1-box">
        <img src={banner1img} className="banner-1-img" />
        <div className="banner-1-text extra-left-margin">
          <h1 className="banner-1-heading">Comfortable & Elegante Living</h1>
          <p className="banner-1-innertext">
            ShoppingDost Products are all made to standard sizes so that you can
            mix and match them freely.
          </p>
          <button className="banner-1-btn">SHOP NOW</button>
        </div>
      </div>
    </section>
  );
}

export default Banner1;

import React from "react";
import "./banner2.css";
import banner2img from "../../assets/banner-2.jpg";

function Banner2() {
  return (
    <section className="banner-2-section">
      <div className="banner-2-box">
        <img src={banner2img} className="banner-1-img" />
        <div className="banner-1-text">
          <h1 className="banner-1-heading">Creative harmonious living</h1>
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

export default Banner2;

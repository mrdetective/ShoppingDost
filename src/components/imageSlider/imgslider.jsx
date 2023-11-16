import React from "react";
import "./imgslider.css";
import shoppingimg from "../../assets/shopping-img-2.jpg";

function Imgslider() {
  return (
    <section className="section-1">
      <div className="latest-product-text">
        <h1 className="latest-product-heading">Our most trending products</h1>
        <p className="latest-product-innertext">
          Once you see them you won't be able to hold back
        </p>
        <button className="see-latest-products-btn">See them</button>
      </div>
      <img className="slider-img" src={shoppingimg} />
    </section>
  );
}

export default Imgslider;

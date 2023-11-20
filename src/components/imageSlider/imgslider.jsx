import React from "react";
import "./imgslider.css";
import shoppingimg from "../../assets/shopping-img-2.jpg";
import {useNavigate} from "react-router-dom";

function Imgslider() {
  const navigate = useNavigate();
  return (
    <section className="section-1">
      <div className="latest-product-text">
        <h1 className="latest-product-heading">Our most trending products</h1>
        <p className="latest-product-innertext">
          Once you see them you won't be able to hold back
        </p>
        <button
          className="see-latest-products-btn"
          onClick={() => {
            navigate("/products/trending");
          }}>
          See them
        </button>
      </div>
      <img className="slider-img" src={shoppingimg} />
    </section>
  );
}

export default Imgslider;

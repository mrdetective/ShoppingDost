import React from "react";
import "./featuredproducts.css";
import Featureproductslider from "../featureproductslider/featureproductslider";

function Featuredproducts() {
  return (
    <section className="featured-products-section">
      <div className="featured-products-box">
        <h1 className="featured-products-heading">
          Get Them Before They're Gone!
        </h1>
        <h3 className="featured-products-subheading">
          These items are presently available in limited quantities and will not
          be restocked until the upcoming year.
        </h3>
      </div>
      <Featureproductslider />
    </section>
  );
}

export default Featuredproducts;

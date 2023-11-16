import React from "react";
import "./landing.css";
import Imgslider from "../../components/imageSlider/imgslider";
import Categories from "../../components/categories/categories";
import Featuredproducts from "../../components/featuredproducts/featuredproducts";

function Landing() {
  return (
    <div className="bigbox">
      <Imgslider />
      <Categories />
      <Featuredproducts />
    </div>
  );
}

export default Landing;

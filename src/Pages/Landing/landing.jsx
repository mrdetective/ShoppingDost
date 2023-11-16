import React from "react";
import "./landing.css";
import Imgslider from "../../components/imageSlider/imgslider";
import Categories from "../../components/categories/categories";

function Landing() {
  return (
    <div className="bigbox">
      <Imgslider />
      <Categories />
    </div>
  );
}

export default Landing;

import React from "react";
import "./landing.css";
import Imgslider from "../../components/imageSlider/imgslider";
import Categories from "../../components/categories/categories";
import Featuredproducts from "../../components/featuredproducts/featuredproducts";
import Banner1 from "../../components/banner1/banner1";
import Banner2 from "../../components/banner2/banner2";

function Landing() {
  return (
    <div className="bigbox">
      <Imgslider />
      <Categories />
      <Banner1 />
      <Featuredproducts />
      <Banner2 />
    </div>
  );
}

export default Landing;

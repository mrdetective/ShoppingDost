import React from "react";
import "./landing.css";
import Imgslider from "../../components/imageSlider/imgslider";
import Categories from "../../components/categories/categories";
import Featuredproducts from "../../components/featuredproducts/featuredproducts";
import Banner1 from "../../components/banner1/banner1";
import Banner2 from "../../components/banner2/banner2";
import Newsletter from "../../components/newsletter/newsletter";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";

function Landing() {
  return (
    <div className="bigbox">
      <Navbar />
      <Imgslider />
      <Categories />
      <Banner1 />
      <Featuredproducts />
      <Banner2 />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Landing;

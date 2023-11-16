import React from "react";
import "./categories.css";
import livingcomf from "../../assets/comfyimg.jpeg";
import skincare from "../../assets/skincare.jpg";
import kitchen from "../../assets/kitchen.jpg";
import electronicsimg from "../../assets/electronics.jpg";

function Categories() {
  return (
    <section className="section-2">
      <div className="category-box">
        <div className="living-comfy-div">
          <img className="living-comf-img" src={livingcomf} />
          <div className="living-comf-text">Comfortable Living</div>
        </div>
        <div className="skincare-div">
          <img src={skincare} className="skincare-img" />
          <div className="skincare-text">Skincare</div>
        </div>
        <div className="kitchen-electronics">
          <div className="kitchen-div">
            <img className="kitchen-img" src={kitchen} />
            <div className="kitchen-text">Kitchen</div>
          </div>
          <div className="electronics-div">
            <img className="electronics-img" src={electronicsimg} />
            <div className="electronics-text">Electronics</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;

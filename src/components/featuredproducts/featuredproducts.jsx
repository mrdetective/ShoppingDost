import React, {useRef} from "react";
import "./featuredproducts.css";
import Featureproductslider from "../featureproductslider/featureproductslider";

function Featuredproducts() {
  const scrollContainerRef = useRef(null);
  const handleScrollLeft = () => {
    const container = scrollContainerRef.current;
    container.scrollTo({
      left: container.scrollLeft - 20 * 16,
      behavior: "smooth",
    });
  };

  const handleScrollRight = () => {
    const container = scrollContainerRef.current;
    container.scrollTo({
      left: container.scrollLeft + 20 * 16,
      behavior: "smooth",
    });
  };
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
      <div className="slider-move-btn">
        <button className="go-left" onClick={handleScrollLeft}>
          {"<"}
        </button>
        <button className="go-right" onClick={handleScrollRight}>
          {">"}
        </button>
      </div>
      <Featureproductslider scrollContainerRef={scrollContainerRef} />
    </section>
  );
}

export default Featuredproducts;

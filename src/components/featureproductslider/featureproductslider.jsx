import React, {useEffect, useState} from "react";
import "./featureproductslider.css";

function Featureproductslider({scrollContainerRef}) {
  const [lessavailableproducts, setlessavailableproducts] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_LESS_PRODUCT_URL)
      .then((response) => {
        if (!response.ok) {
          console.log("Error occurred");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setlessavailableproducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div id="wrapper" ref={scrollContainerRef}>
      <div id="container">
        {lessavailableproducts.map((item, index) => {
          return index === 0 ? (
            <div className="item slide-1" key={item.id}>
              <img
                className="product-img"
                src={item.thumbnail}
                alt={item.title}
              />
              <div className="discount-name">
                <div className="discount-percent">17.94% off</div>
                <div className="item-stock">*Only 34 items left</div>
              </div>
              <div className="cost-stock">
                <h1 className="item-name">iPhone X</h1>
                <h3 className="item-cost">$899</h3>
              </div>
            </div>
          ) : (
            <div className="item" key={item.id}>
              <img
                className="product-img"
                src={item.thumbnail}
                alt={item.title}
              />
              <div className="discount-name">
                <div className="discount-percent">
                  {item.discountPercentage}% off
                </div>
                <div className="item-stock">*Only {item.stock} items left</div>
              </div>
              <div className="cost-stock">
                <h1 className="item-name">{item.title}</h1>
                <h3 className="item-cost">${item.price}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Featureproductslider;

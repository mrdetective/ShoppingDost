import React, {useEffect, useState} from "react";
import "./trendingproducts.css";
import Navbar from "../../components/navbar/navbar";
import {useNavigate} from "react-router-dom";

function Trendingproducts() {
  const [trendingproducts, settrendingproducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(process.env.REACT_APP_TRENDING_URL)
      .then((response) => {
        if (!response.ok) {
          console.log("Error occurred");
        }
        return response.json();
      })
      .then((data) => {
        settrendingproducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Navbar />
      <div className="bigbox2">
        <div className="product-box">
          <h1
            className="product-heading"
            style={{
              background: "#da3820",
              color: "whitesmoke",
            }}>
            Trending Products
          </h1>
          <div className="product-smallbox">
            {trendingproducts.map((item, index) => {
              return (
                <div
                  className="item grid-item"
                  key={item._id}
                  onClick={() => {
                    navigate(`/products/${item._id}`);
                  }}>
                  <img
                    className="product-img"
                    src={item.thumbnail}
                    alt={item.title}
                  />
                  <div className="discount-name">
                    <div className="discount-percent">
                      {item.discountPercentage}% off
                    </div>
                    <div className="item-stock">
                      *Only {item.stock} items left
                    </div>
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
      </div>
    </div>
  );
}

export default Trendingproducts;

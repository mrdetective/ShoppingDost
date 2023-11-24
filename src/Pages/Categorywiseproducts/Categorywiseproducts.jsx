import React, {useEffect, useState} from "react";
import "./Categorywiseproducts.css";
import {useParams} from "react-router-dom";
import Navbar from "../../components/navbar/navbar";

function Categorywiseproducts() {
  const {categoryname} = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(process.env.REACT_APP_CATEGORY_LINK + "/" + categoryname)
      .then((response) => {
        if (!response.ok) {
          console.log("Error occurred");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data);
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
          <h1 className="product-heading">{categoryname.toUpperCase()}</h1>
          <div className="product-smallbox">
            {products.map((item, index) => {
              return (
                <div className="item grid-item" key={item._id}>
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

export default Categorywiseproducts;

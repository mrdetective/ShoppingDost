import React, {useEffect, useState} from "react";
import "./productDetails.css";
import Navbar from "../../components/navbar/navbar";
import {useParams} from "react-router-dom";

function ProductDetails() {
  const {id} = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`${process.env.REACT_APP_GET_PRODUCT_LINK}/${id}`)
      .then((response) => {
        if (!response.ok) {
          console.log("error occured");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProduct(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="bigbox2">
      <Navbar />
      <div className="product-details-box">
        <img className="product-details-img" src={product[0].thumbnail} />
        <div className="product-details-text">
          <h1 className="product-details-title">{product[0].title}</h1>
          <h3 className="description-text">Description</h3>
          <div className="product-details-description">
            {product[0].description}
          </div>
          <div className="product-ratings">
            rating: {product[0].rating} out of 5
          </div>
          <div className="quantity-box">
            <div className="negative-icon">-</div>
            <div className="quantity">0</div>
            <div className="plus-icon">+</div>
          </div>
          <h2 className="product-cost">$ {product[0].price}</h2>
          <div className="product-stock-left">
            **Only {product[0].stock} items left
          </div>
          <div className="product-action-btn">
            <button className="add-to-cart-btn">Add to cart</button>
            <button className="buy-btn">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

import React, {useEffect, useState} from "react";
import "./productDetails.css";
import Navbar from "../../components/navbar/navbar";
import {useParams} from "react-router-dom";

function ProductDetails() {
  const {id} = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setquantity] = useState(0);
  const [thumbnail, setThumbnail] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_GET_PRODUCT_LINK}/${id}`)
      .then((response) => {
        if (!response.ok) {
          console.log("error occured");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data[0].thumbnail);
        selectedImage(data[0].thumbnail);
        setProduct(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const increaseQuantity = () => {
    setquantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity) setquantity(quantity - 1);
  };
  const handleImageClick = (img) => {
    setSelectedImage(img);
    setThumbnail(img);
  };
  if (loading) {
    console.log(loading);
    return null;
  }
  return (
    <div className="bigbox2">
      <Navbar />
      <div className="product-details-box">
        <div className="product-details-img">
          <img
            className="product-details-thumbnail"
            src={thumbnail}
            alt="Thumbnail"
          />
          <div className="img-list">
            <img
              className={`img-list-images ${
                selectedImage === product[0].thumbnail ? "selected-img" : ""
              }`}
              src={product[0].thumbnail}
              onClick={() => handleImageClick(product[0].thumbnail)}
            />
            {product[0].images.map((img, index) => (
              <img
                key={index}
                className={`img-list-images ${
                  selectedImage === img ? "selected-img" : ""
                }`}
                src={img}
                onClick={() => handleImageClick(img)}
              />
            ))}
          </div>
        </div>
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
            <div className="negative-icon" onClick={decreaseQuantity}>
              -
            </div>
            <div className="quantity">{quantity}</div>
            <div className="plus-icon" onClick={increaseQuantity}>
              +
            </div>
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

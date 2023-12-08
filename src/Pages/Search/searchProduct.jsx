import React from "react";
import "./searchProduct.css";
import Navbar from "../../components/navbar/navbar";

function SearchProduct() {
  return (
    <div>
      <Navbar />
      <div className="search-bar">
        <input
          type="text"
          className="product-search-input"
          placeholder="Enter the name of product"
        />
        <button className="search-product-btn">Search</button>
      </div>
    </div>
  );
}

export default SearchProduct;

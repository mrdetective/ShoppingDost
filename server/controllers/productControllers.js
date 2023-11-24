const asyncHandler = require("express-async-handler");
const products = require("../models/Products");
const categories = require("../utils/categories");

const GetProductsWithLessStock = asyncHandler(async (req, res) => {
  const productswithlessstock = await products.find({stock: {$lt: 70}});
  res.status(200).json(productswithlessstock);
});

const GetTrendingProducts = asyncHandler(async (req, res) => {
  const trendingproducts = await products.find({rating: {$gte: 4.5}});
  res.status(200).json(trendingproducts);
});

const GetCategorywiseProducts = asyncHandler(async (req, res) => {
  let allproducts = [];
  for (const category of categories[req.params.categoryname]) {
    const productswithcategory = await products.find({category: category});
    allproducts.push(...productswithcategory);
  }
  res.status(200).json(allproducts);
});

const GetProductwithid = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const product = await products.find({_id: id});
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({
      message: "Not found",
    });
  }
});

module.exports = {
  GetProductsWithLessStock,
  GetTrendingProducts,
  GetCategorywiseProducts,
  GetProductwithid,
};

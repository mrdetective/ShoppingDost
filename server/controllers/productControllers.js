const asyncHandler = require("express-async-handler");
const products = require("../models/Products");

const GetProductsWithLessStock = asyncHandler(async (req, res) => {
  const productswithlessstock = await products.find({stock: {$lt: 70}});
  res.status(200).json(productswithlessstock);
});

const GetTrendingProducts = asyncHandler(async (req, res) => {
  const trendingproducts = await products.find({rating: {$gte: 4.5}});
  res.status(200).json(trendingproducts);
});

module.exports = {GetProductsWithLessStock, GetTrendingProducts};

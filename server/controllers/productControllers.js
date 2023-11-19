const asyncHandler = require("express-async-handler");
const products = require("../models/Products");

const GetProductsWithLessStock = asyncHandler(async (req, res) => {});

module.exports = {GetProductsWithLessStock};

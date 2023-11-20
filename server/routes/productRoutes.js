const {
  GetProductsWithLessStock,
  GetTrendingProducts,
} = require("../controllers/productControllers");

const router = require("express").Router();

router.route("/lessavailable").get(GetProductsWithLessStock);
router.route("/trending").get(GetTrendingProducts);

module.exports = router;

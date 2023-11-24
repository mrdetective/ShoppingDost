const {
  GetProductsWithLessStock,
  GetTrendingProducts,
  GetCategorywiseProducts,
} = require("../controllers/productControllers");

const router = require("express").Router();

router.route("/lessavailable").get(GetProductsWithLessStock);
router.route("/trending").get(GetTrendingProducts);
router.route("/category/:categoryname").get(GetCategorywiseProducts);

module.exports = router;

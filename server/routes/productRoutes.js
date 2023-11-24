const {
  GetProductsWithLessStock,
  GetTrendingProducts,
  GetCategorywiseProducts,
  GetProductwithid,
} = require("../controllers/productControllers");

const router = require("express").Router();

router.route("/lessavailable").get(GetProductsWithLessStock);
router.route("/trending").get(GetTrendingProducts);
router.route("/category/:categoryname").get(GetCategorywiseProducts);
router.route("/:id").get(GetProductwithid);

module.exports = router;

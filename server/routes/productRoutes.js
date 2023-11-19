const {GetProductsWithLessStock} = require("../controllers/productControllers");

const router = require("express").Router();

router.route("/lessavailable").get(GetProductsWithLessStock);

module.exports = router;

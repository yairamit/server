const express = require("express");
const productControllers = require("../controllers/productControllers");
const router = express.Router();


router
  .route("/")
  .get(productControllers.getAllProducts)
  .post(productControllers.createNewProduct);

router.route("/:name").get(productControllers.getProductByName);

module.exports = router;

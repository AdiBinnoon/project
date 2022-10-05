const express = require("express");

const productController = require("../controllers/productController");
const authController = require("../controllers/authController");

const router = express.Router();

router.use(authController.autheticateUser);

router
  .route("/")
  .get(productController.getAllProducts)
  .post(productController.createNewProduct);

router
  .route("/:id")
  .all(productController.checkValidId)
  .get(productController.getProductById)
  .delete(productController.delProductById)
  .put(productController.updateProduct);

module.exports = router;

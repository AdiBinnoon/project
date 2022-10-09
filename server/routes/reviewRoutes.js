const express = require("express");

const reviewController = require("../controllers/reviewController");
const authController = require("../controllers/authController");

const router = express.Router();

router.use(
  authController.autheticateUser,
  reviewController.checkIfProductExist
);

router.route("/:productId").post(reviewController.createNewReview);
// .get(reviewController.getReviewById);

module.exports = router;

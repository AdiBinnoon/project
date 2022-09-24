const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "you must enter a review title"],
    trim: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
  stars: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  reviewer: {
    type: String,
    required: true,
  },
});

const Review = mongoose.model("reviews", reviewSchema);
module.exports = Review;

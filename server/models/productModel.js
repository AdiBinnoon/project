const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "you must enter a product name"],
      trim: true,
      maxlength: [20, "name can't be longer than 20"],
      unique: true,
    },

    price: {
      type: Number,
      required: [true, "you must enter price"],
      min: 1,
    },

    description: {
      type: String,
      required: [true, "you must enter a product name"],
      trim: true,
      minlength: [10, "please provide non empty description"],
      maxlength: [100, "description can't be longer than 100"],
    },

    category: {
      type: String,
      default: "general",
      enum: ["MTB", "Road", "e-mtb", "general"],
    },

    size: {
      type: String,
      enum: ["small", "medium", "large"],
      default: "medium",
    },
    images: [String],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    id: false,
  }
);

const Product = mongoose.model("products", productSchema);
module.exports = Product;

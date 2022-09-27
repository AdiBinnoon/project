const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    model: {
      type: String,
      required: [true, "you must enter a product model"],
      trim: true,
      maxlength: [20, "name can't be longer than 20"],
      unique: true,
    },

    price: {
      type: Number,
      required: [true, "you must enter price"],
      min: 1,
    },

    images: {
      type: [String],
      default: [
        "https://i.pinimg.com/originals/96/af/7b/96af7babdccc560c51f6837524472408.jpg",
      ],
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
      enum: ["MTB", "Road", "e-mtb", "general", "Accessories"],
    },

    brand: {
      type: String,
      enum: ["Trek", "Santa Cruz", "specialized", "YT", "Yeti"],
    },

    size: {
      type: String,
      enum: ["small", "medium", "large"],
      required: [true, "please enter size"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    id: false,
  }
);

productSchema.virtual("reviews", {
  localField: "_id",
  foreignField: "product",
  ref: "reviews",
});


const Product = mongoose.model("products", productSchema);
module.exports = Product;

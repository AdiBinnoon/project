const mongoose = require("mongoose");

const productOrder = new mongoose.Schema({
  product: {
    type: mongoose.Schema.ObjectId,
    ref: "products",
    required: true,
  },

  amount: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      default: Date.now(),
    },

    products: [
      {
        product: {
          type: mongoose.Schema.ObjectId,
          ref: "products",
          required: true,
        },
        amount: {
          type: Number,
          require: true,
          min: 1,
          validate: {
            validator: function (val) {
              val = String(val);
              return !val.includes(".");
            },
            message: "amount can't be less float",
          },
        },
        required: true,
      },
    ],

    buyer: {
      type: mongoose.Schema.ObjectId,
      ref: "users",
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Order = mongoose.model("orders", orderSchema);
module.exports = Order;

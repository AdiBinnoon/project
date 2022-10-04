const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      default: Date.now(),
    },

    user: {
      type: mongoose.Schema.ObjectId,
      ref: "users",
      required: true,
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
              //   return val === Math.floor(val)
            },
            message: "amount can't be less float",
          },
        },
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Order = mongoose.model("orders", orderSchema);
module.exports = Order;

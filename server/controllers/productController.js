const Product = require("../models/productModel");

module.exports.createNewProduct = (req, res) => {
  res.send("it's work post");
};

module.exports.getAllProducts = (req, res) => {
  res.send("it's work get");
};

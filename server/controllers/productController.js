const mongoose = require("mongoose");

const Product = require("../models/productModel");
const { sendRes } = require("../helpers/sendRes");
const { makeFilterObject } = require("../helpers/makeFilterObject");

module.exports.createNewProduct = async (req, res) => {
  try {
    const { model, price, images, description, category, brand, size } =
      req.body;
    const newProduct = await Product.create({
      model,
      price,
      images,
      description,
      category,
      brand,
      size,
    });
    sendRes(res, newProduct, 201);
  } catch (err) {
    sendRes(res, err, 400, true);
  }
};

module.exports.getAllProducts = async (req, res) => {
  const filterObject = makeFilterObject(req.query);
  try {
    const products = await Product.find(filterObject);
    sendRes(res, products, 200);
  } catch (err) {
    sendRes(res, 400, true);
  }
};

module.exports.getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) throw new Error("id does not exist");
    sendRes(res, product, 200);
  } catch (err) {
    sendRes(res, err, 400, true);
  }
};

module.exports.delProductById = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete({ _id: id });
    sendRes(res, {}, 204);
  } catch (err) {
    sendRes(res, err, 400, true);
  }
};

module.exports.checkValidId = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    const error = { message: "invalid id" };
    sendRes(res, error, 400, true);
    return;
  }
  next();
};

module.exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    // const products = await Product.find({ category: "MTB" });
    // products.forEach((pr) => {
    //   pr.price = 1;
    //   pr.save({
    //     runValidators: true,
    //   });
    // });
    sendRes(res, product, 200);
  } catch (err) {
    sendRes(res, err, 400, true);
  }
};

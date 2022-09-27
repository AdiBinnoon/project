const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "you must enter name"],
    trim: true,
  },
  password: {
    type: String,
    require: [true, "please enter password"],
    trim: true,
    select: false,
  },
  email: {
    type: String,
    required: [true, "you must enter an email"],
    unique: [true, "email already in use"],
    validate: [validator.isEmail, "invalid email"],
  },
  active: {
    type: Boolean,
    default: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["buyer", "editor", "admin"],
    default: "buyer",
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
});

const User = mongoose.model("users", userSchema);
module.exports = User;

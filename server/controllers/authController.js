const User = require("../models/userModel");
const { sendRes } = require("../helpers/sendRes");

module.exports.sighUp = async (req, res) => {
  try {
    const { username, password, email, address } = req.body;
    const user = await User.create({
      username,
      password,
      email,
      address,
    });
    sendRes(res, user, 201);
  } catch (err) {
    sendRes(res, err, 400, true);
  }
};



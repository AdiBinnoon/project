const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();

dotenv.config({ path: ".env" });

const port = process.env.PORT;
const url = process.env.SERVER_URL;

app.listen(port, url, () => {
  console.log(`listening on ${url}: ${port}`);
});

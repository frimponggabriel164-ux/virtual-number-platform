const mongoose = require("mongoose");

const NumberSchema = new mongoose.Schema({
  number: String,
  country: String,
  price: Number,
  isSold: { type: Boolean, default: false }
});

module.exports = mongoose.model("Number", NumberSchema);

const mongoose = require("mongoose");

const BusinessSchema = new mongoose.Schema({
  userName: String,
  companyName: String,
  password: String,
  picture: String,
  link: String,
  topic: String,

  email: String,
  rating: Number,
});

const Business = mongoose.model("Business", BusinessSchema);

module.exports = Business;

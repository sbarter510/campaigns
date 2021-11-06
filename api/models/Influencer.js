const mongoose = require("mongoose");

const influencerSchema = new mongoose.Schema({
  userName: String,
  password: String,
  picture: String,
  link: String,
  topic: String,
  platforms: Array,
  email: String,
  rating: Number,
  followers: Number,
});

const Influencer = mongoose.model("Influencer", influencerSchema);

module.exports = Influencer;

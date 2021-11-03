const mongoose = require("mongoose");

const influencerSchema = new mongoose.Schema({
  userName: String,
  password: String,
  picture: String,
  genres: String,
  platforms: Array,
  email: String,
});

const Influencer = mongoose.model("Influencer", influencerSchema);

module.exports = Influencer;

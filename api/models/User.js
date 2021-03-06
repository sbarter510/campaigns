const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: String,
  password: String,
  email: String,
  coverPhotoURL: String,
  profilePhotoURL: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Business = require("../models/Business");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

db = mongoose.connect("mongodb://localhost:27017/gravity", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

//Register

router.post("/register", (req, res) => {
  const userName = req.body.userName;
  const email = req.body.email;
  const password = req.body.password;
  const companyName = req.body.companyName;
  const topics = req.body.topic;
  const rating = req.body.rating;

  if (!userName || !email || !password) {
    return res.send({ msg: "Please fill out all fields" });
  }
  Business.findOne({ email }).then((doc) => {
    if (doc) {
      return res.json({ msg: "User with that email already exists" });
    }
    //password excryption
    bcrypt
      //generating salt
      .genSalt(10)
      .then((salt) => {
        //generating hash
        bcrypt.hash(password, salt).then((hash) => {
          //create new user in db using encryted pw
          Business.create({ email, userName, password: hash }).then((doc) => {
            return res.json({
              msg: "Registration Successful",
              user: doc.userName,
            });
          });
        });
      })
      .catch((e) => console.log(e));
  });
});

//Login

router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.json({ msg: "Please enter both email and password" });
  }

  Business.findOne({ email })
    .then((doc) => {
      if (!doc) {
        return res.json({ msg: "No user with that email" });
      }
      bcrypt.compare(password, doc.password).then((match) => {
        if (!match) {
          res.json({ msg: "Invalid Password" });
        }
        jwt.sign(
          { userName: doc.userName },
          config.get("JWT_SECRET"),
          (err, token) => {
            if (err) {
              console.log(err);
            }
            return res.json({ token: token, userName: doc.userName });
          }
        );
      });
    })
    .catch((e) => console.log(e));
});

module.exports = router;

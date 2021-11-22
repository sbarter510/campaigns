const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

//db=
mongoose.connect("mongodb://localhost:27017/gravity", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

//Register

router.post("/register", (req, res) => {
  const userName = req.body.userName;
  const email = req.body.email;
  const password = req.body.password;

  if (!userName || !email || !password) {
    return res.send({ msg: "Please fill out all fields" });
  }
  User.findOne({ email }).then((doc) => {
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
          User.create({ email, userName, password: hash }).then((doc) => {
            return res.json({
              msg: "Registration Successful",
              userName: doc.userName,
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

  User.findOne({ email })
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
            return res.json({
              token: token,
              userName: doc.userName,
              email: doc.email,
            });
          }
        );
      });
    })
    .catch((e) => console.log(e));
});

router.get("/profile", auth, (req, res) => {
  User.findOne({ userName: req.userName.userName }).then((doc) => {
    return res.json(doc);
  });
});

router.post("/changecoverphoto", (req, res) => {
  const userName = req.body.userName;
  const coverPhotoURL = req.body.coverPhotoURL;

  if (!userName || !coverPhotoURL) {
    return res.json({ msg: "Something went wrong try again" });
  }

  User.updateOne({ userName }, { coverPhotoURL }).then((doc) => {
    if (!doc) {
      return res.json({ msg: "Something went wrong" });
    }

    return res.json(doc);
  });
});

//Profile picture route
router.post("/changeprofilephoto", (req, res) => {
  const userName = req.body.userName;
  const profilePhotoURL = req.body.profilePhotoURL;

  if (!userName || !profilePhotoURL) {
    return res.json({ msg: "Something went wrong try again" });
  }

  User.updateOne({ userName }, { profilePhotoURL }).then((doc) => {
    if (!doc) {
      return res.json({ msg: "Something went wrong" });
    }

    return res.json(doc);
  });
});

//adds jwt verifcation
router.get("/auth", auth, (req, res) => {
  try {
    // console.log(req.userName);
    const user = User.findOne({ userName: req.userName.userName })
      .then((doc) => doc)
      .catch((e) => console.log(e));
    if (!user) throw Error("User does not exist");
    res.json(req.userName);
  } catch (e) {
    return res.status(400).json({ msg: e.message });
  }
});

module.exports = router;

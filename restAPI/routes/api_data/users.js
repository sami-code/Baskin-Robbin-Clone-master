var express = require("express");
var router = express.Router();
let { User, UserValidationLogin } = require("../../models/Users");
var bcrypt = require("bcryptjs");

const _ = require("lodash");
const jwt = require("jsonwebtoken");
const config = require("config");
let auth = require("../../middlewares/auth");
const validateUser = require("../../middlewares/userValidation");

/* Register */
router.post("/register", validateUser, async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    await user.generateHashedPassword();
    await user.save();
    let token = jwt.sign(
      { _id: user._id, name: user.name, role: user.role },
      config.get("JwtPrivateKey")
    );
    let datatoreturn = {
      name: user.name,
      email: user.email,
      token: user.token,
    };
    return res.send(datatoreturn);
  } else {
    return res.status(400).send("Email Id already Exist");
  }
});

////// Login
router.post("/login", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    let isValid = await bcrypt.compare(req.body.password, user.password);
    if (!isValid) {
      return res.status(401).send("Invalid password");
    } else {
      let token = jwt.sign(
        { _id: user._id, name: user.name, role: user.role },
        config.get("JwtPrivateKey")
      );
      res.send(token);
    }
  } else {
    return res.status(400).send("Email Id not registered");
  }
});

// Get Users
router.get("/", auth, async (req, res) => {
  console.log(req.user);
  let users = await User.find();
  return res.send(users);
});

// Get single User
router.get("/:id", async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    if (!user) return res.status(400).send("No ID found");
    return res.send(user);
  } catch (err) {
    return res.status(400).send("Invalid ID");
  }
});
// update User
router.put("/:id", async (req, res) => {
  let user = await User.findById(req.params.id);
  user.name = req.body.name;
  user.price = req.body.price;
  user.load = req.body.load;
  await user.save();
  return res.send(user);
});
// delete User
router.delete("/:id", async (req, res) => {
  try {
    let user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(400).send("No ID found");
    return res.send(user);
  } catch (err) {
    return res.status(400).send("Invalid ID");
  }
});

module.exports = router;

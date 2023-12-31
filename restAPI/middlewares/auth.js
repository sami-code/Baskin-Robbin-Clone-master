const jwt = require("jsonwebtoken");
const config = require("config");
const { User } = require("../models/Users");
async function auth(req, res, next) {
  let token = req.header("x-auth-token");
  if (!token) return res.status(400).send("Token Not Given ");
  try {
    let user = jwt.verify(token, config.get("JwtPrivateKey"));
    req.user = await User.findById(user._id);
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  next();
}
module.exports = auth;

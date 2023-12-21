const { UserValidation } = require("../models/Users");

function validateUser(req, res, next) {
  let { error } = new UserValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  next();
}
module.exports = validateUser;

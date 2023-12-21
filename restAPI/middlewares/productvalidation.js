const { validation } = require("../models/product");

function validateProduct(req, res, next) {
  let { error } = new validation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  next();
}
module.exports = validateProduct;

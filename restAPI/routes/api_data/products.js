const express = require("express");
let router = express.Router();
let { Product } = require("../../models/product");
let productValidation = require("../../middlewares/productvalidation");
let auth = require("../../middlewares/auth");
let admin = require("../../middlewares/admin");

// Get products
router.get("/", async (req, res) => {
  console.log(req.user);
  let products = await Product.find();
  return res.send(products);
});

// Get single products
router.get("/:id", auth, async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    if (!product) return res.status(400).send("No ID found");
    return res.send(product);
  } catch (err) {
    return res.status(400).send("Invalid ID");
  }
});
// update product
router.put("/:id", productValidation, auth, admin, async (req, res) => {
  let product = await Product.findById(req.params.id);
  product.name = req.body.name;
  product.price = req.body.price;
  product.url = req.body.url;
  product.description = req.body.description;
  await product.save();
  return res.send(product);
});
// delete product
router.delete("/:id", auth, admin, async (req, res) => {
  try {
    let product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(400).send("No ID found");
    return res.send(product);
  } catch (err) {
    return res.status(400).send("Invalid ID");
  }
});
// adding data
router.post("/", productValidation, auth, admin, async (req, res) => {
  let product = new Product();
  product.name = req.body.name;
  product.price = req.body.price;
  product.url = req.body.url;
  product.description = req.body.description;
  await product.save();
  return res.send(product);
});

module.exports = router;

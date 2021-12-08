var express = require("express");
var router = express.Router();
var Product = require("../../models/Product");

router.get("/api/products/:id", async function (req, res, next) {
  let product = await Product.findById(req.params.id);
  return res.send(product);
});
router.get("/api/products", async function (req, res, next) {
  let products = await Product.find();
  return res.send(products);
});
router.post("/api/products", async function (req, res, next) {
  let product = new Product(req.body);
  await product.save();
  res.send(product);
});
router.put("/api/products/:id", async function (req, res, next) {
  let product = await Product.findById(req.params.id);
  product.name = req.body.name;
  product.price = req.body.price;
  product.color = req.body.color;
  product.description = req.body.description;
  product.department = req.body.department;
  await product.save();
  return res.send(product);
});
router.delete("/api/products/:id", async function (req, res, next) {
  let product = await Product.findById(req.params.id);
  await product.delete();
  return res.send("deleted");
});
module.exports = router;

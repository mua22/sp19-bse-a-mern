var express = require("express");
var router = express.Router();
var Product = require("../models/Product");
/* GET home page. */
router.get("/register", function (req, res, next) {
  return res.render("site/register");
});
router.get("/contact-us", function (req, res, next) {
  return res.render("site/contact", { layout: "layout" });
});
router.get("/", async function (req, res, next) {
  let products = await Product.find();
  return res.render("site/homepage", {
    pagetitle: "Awesome Products",
    products,
  });
});

module.exports = router;

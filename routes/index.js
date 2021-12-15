var express = require("express");
var router = express.Router();
var Product = require("../models/Product");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
/* GET home page. */
router.get("/login", function (req, res, next) {
  return res.render("site/login");
});
router.post("/login", async function (req, res, next) {
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.send("User Not Found");
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (validPassword) {
    req.session.user = user;
    return res.redirect("/");
  } else return res.send("Invalid Password");
});
router.get("/register", function (req, res, next) {
  return res.render("site/register");
});
router.post("/register", async function (req, res, next) {
  let user = new User(req.body);
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(req.body.password, salt);

  await user.save();
  return res.redirect("/login");
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

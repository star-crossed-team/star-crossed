const router = require("express").Router();
const withAuth = require("../utils/auth");
const User = require('../models/User');

router.get("/", (req, res) => {
  try {
    res.render("homepage");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile1");
    return;
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/map", async (req, res) => {
  try {
    const userData = await User.findAll();
    const users = userData.map((user) => user.get({ plain: true }));
    res.render("map", { users });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
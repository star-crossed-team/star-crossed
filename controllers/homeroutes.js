const router = require("express").Router();
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {

    res.render("homepage");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/profile", async (req, res) => {
  try {

    res.render("profile");
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/profile2", async (req, res) => {
  try {

    res.render("profile2");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/profile3", async (req, res) => {
  try {

    res.render("profile3");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/profile4", async (req, res) => {
  try {

    res.render("profile4");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});


router.get("/signup", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  // if (req.session.logged_in) {
  //   alert("You must log out before creating a new profile");
  //   res.redirect("/homepage");
  //   return;
  // }
  res.render("signup");
});

module.exports = router;

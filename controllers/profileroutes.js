const router = require("express").Router();
const withAuth = require("../utils/auth");

router.get("/profile1", (req, res) => {
    try {
        res.render("profile1");
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/profile2", (req, res) => {
    try {
        res.render("profile2");
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/profile3", (req, res) => {
    try {
        res.render("profile3");
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/profile4", (req, res) => {
    try {
        res.render("profile4");
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
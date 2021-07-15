const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const profileRoutes = require("./profileroutes");

router.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use("/", profileRoutes);

module.exports = router;
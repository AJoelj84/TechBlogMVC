const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const mainpageRoutes = require("./mainpageRoutes.js");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/dashboard", mainpageRoutes);

router.use((req, res) => {res.status(404).end();});

module.exports = router;
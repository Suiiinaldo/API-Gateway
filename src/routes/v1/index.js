const express = require("express");

const { InfoController } = require("../../controller");
const UserRoutes = require("./user-routes");

const router = express.Router();

router.get("/info", InfoController.info);

router.use("/signup",UserRoutes);

module.exports = router;

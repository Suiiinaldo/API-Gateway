const express = require("express");

const { InfoController } = require("../../controller");
const UserRoutes = require("./user-routes");
const { AuthRequestMiddlewares } = require("../../middlewares")
const router = express.Router();

router.get("/info", AuthRequestMiddlewares.checkAuth,
                    InfoController.info);

router.use("/user",UserRoutes);

module.exports = router;

const express = require("express");

const router = express.Router();

const { UserController } = require("../../controller");
const { AuthRequestMiddlewares } = require("../../middlewares");


router.post("/signup",
            AuthRequestMiddlewares.validateAuthRequestSignUp,
            UserController.signup);

router.post("/signin",
            AuthRequestMiddlewares.validateAuthRequestSignIn,
            UserController.signin);     
            
router.post("/role",
            AuthRequestMiddlewares.checkAuth,
            AuthRequestMiddlewares.isAdmin,
            UserController.addRoleToUser);

module.exports = router;
const express = require("express");

const router = express.Router();

const { UserController } = require("../../controller")


router.post("/",
            UserController.signup);
        

module.exports = router;
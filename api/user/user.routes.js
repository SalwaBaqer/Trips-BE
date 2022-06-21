const express = require("express");
const { signup } = require("./user.controllers");

//create a mini express app
const router = express.Router();

//routes
router.post("/signup", signup);

module.exports = router;

const express = require("express");
const router = express.Router();

const { userCreate } = require("./user.controllers");

router.post("/", userCreate);

module.exports = router;

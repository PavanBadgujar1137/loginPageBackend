const express = require("express");
const router = express.Router();

const { createLogin } = require("../controllers/createLogin");
router.post("/createLogin", createLogin);

module.exports = router;

const express = require("express");
const otpController = require("../controllers/otpControllers.js");
const router = express.Router();

router.post("/send-otp", otpController);

module.exports = router;

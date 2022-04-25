const express = require("express");
const { OtpVerification } = require("../controllers/UserControllers");

const router = express.Router();

router.route("/api/otp").post(OtpVerification);
module.exports = router;

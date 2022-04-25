const asyncHandler = require("express-async-handler");

const OtpVerification = asyncHandler(async (req, res) => {
  const { otp } = req.body;

  if (otp.length != 6) {
    res.status(400);
    throw new Error("Input is not correct");
  }
  if (isNaN(parseInt(otp))) {
    res.status(400);
    throw new Error("Input Is not Number");
  }

  res.json({
    otp,
  });
});
module.exports = { OtpVerification };

const express = require("express");
const router = express.Router();
const v1Routes = require("./v1"); // Import the v1 router

router.use("/v1", v1Routes); // Register all v1 routes under `/api/v1`

module.exports = router;

const express = require("express");
const router = express.Router();
const { pingController } = require("../../controllers"); // Import from central controller

router.get("/", pingController.pingCheck); // ✅ Proper function usage

module.exports = router;

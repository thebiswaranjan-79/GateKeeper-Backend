const express = require("express");
const router = express.Router();

// Import all v1 routes
const pingRoutes = require("./ping.routes");
// const authRoutes = require("./auth.routes");
// const policyRoutes = require("./policy.routes");
// const resourceRoutes = require("./resource.routes");

// Register v1 routes
router.use("/ping", pingRoutes);
// router.use("/auth", authRoutes);
// router.use("/policy", policyRoutes);
// router.use("/resource", resourceRoutes);

module.exports = router;

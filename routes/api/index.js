const router = require("express").Router();
const thoughtRoutes = require("./thoughtRoutes");
const userRoute = require("./userRoutes");

router.use("/thoughts", thoughtRoutes);
router.use("/users", userRoute);

module.exports = router;

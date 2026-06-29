const express = require("express");
const { userProtect } = require("../middleware/authMiddleware");
const { placeOrder, getUserOrders, getOrderById } = require("../controllers/orderControllers");

const router = express.Router();

router.post("/placeOrder", userProtect, placeOrder);
router.get("/getUserOrders", userProtect, getUserOrders);
router.get("/getOrderById/:id", userProtect, getOrderById);

module.exports = router;

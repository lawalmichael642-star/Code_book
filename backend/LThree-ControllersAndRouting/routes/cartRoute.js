const express = require("express");
const { userProtect } = require("../middleware/authMiddleware");
const { addToCart, removeFromCart, clearCart, getUserCart } = require("../controllers/cartController");

const router = express.Router();

router.post("/addToCart", userProtect, addToCart);
router.delete("/removeFromCart", userProtect, removeFromCart);
router.delete("/clearCart", userProtect, clearCart);
router.get("/getUserCart", userProtect, getUserCart);

module.exports = router;

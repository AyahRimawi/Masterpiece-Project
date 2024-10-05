const express = require("express");
const router = express.Router();
const cartController = require("../Controllers/cartController");
const authMiddleware = require("../Middleware/auth");

router.get("/", cartController.getCart);
router.post("/addToCart", cartController.addToCart);
router.put("/updateCartItem/:itemId", cartController.updateCartItem);
router.delete("/removeCartItem/:itemId", cartController.removeCartItem);
router.delete("/clearCart", cartController.clearCart);
router.post(
  "/transferGuestCart",
  authMiddleware,
  cartController.transferGuestCart
);

module.exports = router;

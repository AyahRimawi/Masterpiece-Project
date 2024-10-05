// // const express = require("express");
// // const router = express.Router();
// // const cartController = require("../Controllers/cartController");
// // const authMiddleware = require("../Middleware/auth");

// // router.post("/addToCart", cartController.addToCart);
// // router.delete("/removeFromCart/:itemId", cartController.removeFromCart);
// // router.put("/updateCartItem/:itemId", cartController.updateCartItem);
// // router.get("/getCart", cartController.getCart);
// // router.post("/selectCartItems", cartController.selectCartItems);
// // router.post("/mergeGuestCart", authMiddleware, cartController.mergeGuestCart);

// // module.exports = router;



// const express = require("express");
// const router = express.Router();
// const cartController = require("../Controllers/cartController");
// const authMiddleware = require("../Middleware/auth");

// router.post("/addToCart", cartController.addToCart);
// router.delete("/removeFromCart/:itemId", cartController.removeFromCart);
// router.put("/updateCartItem/:itemId", cartController.updateCartItem);
// router.get("/getCart", cartController.getCart);
// router.post("/selectCartItems", cartController.selectCartItems);
// router.post("/mergeGuestCart", authMiddleware, cartController.mergeGuestCart);

// module.exports = router;


// routes/cart.js


const express = require("express");
const router = express.Router();
const cartController = require("../Controllers/cartController");
// const authMiddleware = require("../Middleware/auth");

// router.post("/addToCart", cartController.addToCart);
// router.get("/getCart", cartController.getCart);
// router.put("/updateCartItem/:itemId", cartController.updateCartItem);
// router.delete("/removeCartItem/:itemId", cartController.removeCartItem);
// router.delete("/clearCart", cartController.clearCart);
// router.put(
//   "/toggleItemSelection/:itemId",
//   cartController.toggleItemSelection
// );
// router.post(
//   "/transferGuestCart",
//   authMiddleware,
//   cartController.transferGuestCart
// );



router.post("/addToCart", cartController.addToCart);
router.get("/", cartController.getCart);
router.put("/updateCartItem/:itemId", cartController.updateCartItem);
router.delete("/removeCartItem/:itemId", cartController.removeCartItem);
router.delete("/clearCart", cartController.clearCart);

module.exports = router;

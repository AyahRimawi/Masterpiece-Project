const express = require("express");
const router = express.Router();
const orderController = require("../Controllers/orderController");

const auth = require("../Middleware/auth");

router.post("/create", auth, orderController.createOrder);
router.get("/user-orders", auth, orderController.getUserOrders);

// router.get("/user", auth, orderController.getUserOrders);
// router.get("/:orderId", auth, orderController.getOrderById);

module.exports = router;

//! postman ...
////////////////////////
//? createOrder .. POST
// * http://localhost:8080/api/order/createOrder

// {
//   "items": [
//     {
//       "productId": "<productId>",
//       "quantity": 2,
//       "size": "M",
//       "color": "Red"
//     }
//   ],
//   "totalAmount": 100,
//   "paymentMethod": "PayPal",
//   "shippingAddress": {
//     "governorate": "Cairo",
//     "details": "123 Main St"
//   }
// }

////////////////////////
//? getAllOrdersForUser .. GET
//* http://localhost:8080/api/order/getAllOrdersForUser
////////////////////////
//? updateOrderStatus .. PATCH
//* http://localhost:8080/api/order/updateOrderStatus/:orderId/status

// {
//   "status": "Shipped"
// }
////////////////////////
//? getAllOrdersForSeller .. GET
//*http://localhost:8080/api/order/getAllOrdersForSeller/seller/:sellerId/orders
////////////////////////


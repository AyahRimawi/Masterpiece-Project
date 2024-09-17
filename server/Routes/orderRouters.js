const express = require("express");
const router = express.Router();
const orderController = require("../Controllers/orderController");
const auth = require("../Middleware/auth");

router.post("/createOrder", auth, orderController.createOrder);
router.get("/getAllOrdersForUser", auth, orderController.getAllOrdersForUser);
router.patch(
  "/updateOrderStatus/:orderId/status",
  auth,
  orderController.updateOrderStatus
);
router.get(
  "/getAllOrdersForSeller/seller/:sellerId/orders",
  auth,
  orderController.getAllOrdersForSeller
);

router.get(
  "/getOrderAmountsForSeller/seller/:sellerId/amounts",
  auth,
  orderController.getOrderAmountsForSeller
);

module.exports = router;

//! postman ...
////////////////////////
//? createOrder .. POST
//* http://localhost:8080/api/order/createOrder

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


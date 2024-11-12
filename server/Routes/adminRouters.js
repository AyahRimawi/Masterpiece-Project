
// const express = require("express");
// const router = express.Router();
// const adminController = require("../Controllers/adminController");
// const auth = require("../Middleware/auth");
// const adminAuth = require("../Middleware/adminAuth");

// // Apply auth and adminAuth middleware to all routes
// router.use(auth, adminAuth);

// // Dashboard stats
// router.get("/dashboard-stats", adminController.getDashboardStats);

// // Users
// router.get("/users", adminController.getUsers);
// router.post("/users/:userId/activate", adminController.activateUser);
// router.post("/users/:userId/deactivate", adminController.deactivateUser);
// router.delete("/users/:userId", adminController.deleteUser);

// // Products
// router.get("/products", adminController.getProducts);
// router.post("/products/:productId/approve", adminController.approveProduct);
// router.post("/products/:productId/reject", adminController.rejectProduct);
// router.delete("/products/:productId", adminController.deleteProduct);

// // Orders
// router.get("/orders", adminController.getOrders);
// router.post("/orders/:orderId/complete", adminController.completeOrder);

// // Messages
// router.get("/messages", adminController.getAllMessages);
// router.post("/messages/:messageId/respond", adminController.respondToMessage);

// module.exports = router;


// Routes/adminRouter.js
const express = require("express");
const router = express.Router();
const adminController = require("../Controllers/adminController");
const auth = require("../Middleware/auth");
const adminAuth = require("../Middleware/adminAuth");

// Apply auth and adminAuth middleware to all routes
router.use(auth, adminAuth);

// Dashboard stats
router.get("/dashboard-stats", adminController.getDashboardStats);

// Users
router.get("/users", adminController.getUsers);
router.post("/users/:userId/activate", adminController.activateUser);
router.post("/users/:userId/deactivate", adminController.deactivateUser);
router.delete("/users/:userId", adminController.deleteUser);

// Products
router.get("/products", adminController.getProducts);
router.post("/products/:productId/approve", adminController.approveProduct);
router.post("/products/:productId/reject", adminController.rejectProduct);
router.delete("/products/:productId", adminController.deleteProduct);

// Orders
router.get("/orders", adminController.getOrders);
router.post("/orders/:orderId/complete", adminController.completeOrder);
// New order routes
router.post("/orders/:orderId/status", adminController.updateOrderStatus);
router.get("/orders/:orderId", adminController.getOrderById);

// Messages
router.get("/messages", adminController.getAllMessages);
router.post("/messages/:messageId/respond", adminController.respondToMessage);

module.exports = router;
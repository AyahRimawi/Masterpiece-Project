const express = require("express");
const router = express.Router();
const adminController = require("../Controllers/adminController");
const auth = require("../Middleware/auth");
const adminAuth = require("../Middleware/adminAuth");

// Apply auth and adminAuth middleware to all routes
router.use(auth, adminAuth);

// Dashboard stats
// router.get("/dashboard-stats", adminController.getDashboardStats);

router.get(
  "/dashboard-stats",
  auth,
  (req, res, next) => {
    console.log("User accessing dashboard stats:", req.user);
    if (req.user.role !== "admin") {
      console.log("Access denied: User is not an admin");
      return res
        .status(403)
        .json({ msg: "Access denied. Admin privileges required." });
    }
    next();
  },
  adminController.getDashboardStats
);
// Users
router.get("/users", adminController.getUsers);
router.post("/users/:userId/activate", adminController.activateUser);
router.post("/users/:userId/deactivate", adminController.deactivateUser);
router.post("/users/:userId/delete", adminController.deleteUser);

// Products
router.get("/products", adminController.getProducts);
router.post("/products/:productId/approve", adminController.approveProduct);
router.post("/products/:productId/reject", adminController.rejectProduct);
router.post("/products/:productId/delete", adminController.deleteProduct);

// Orders
router.get("/orders", adminController.getOrders);
router.post("/orders/:orderId/complete", adminController.completeOrder);

module.exports = router;

const User = require("../Models/User");
const { Product, Variant } = require("../Models/Product");
const Order = require("../Models/Order");
const emailService = require('../utils/emailService');



exports.getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalSales = await Order.aggregate([
      { $group: { _id: null, total: { $sum: "$totalAmount" } } },
    ]);
    const totalProfit = totalSales[0]?.total * 0.1 || 0; // Assuming 10% profit

    // Get sales data for the last 30 days
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    const salesData = await Order.aggregate([
      { $match: { createdAt: { $gte: thirtyDaysAgo } } },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          sales: { $sum: "$totalAmount" },
          profit: { $sum: { $multiply: ["$totalAmount", 0.1] } },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    res.json({
      totalUsers,
      totalSales: totalSales[0]?.total || 0,
      totalProfit,
      salesData: salesData.map((item) => ({
        date: item._id,
        sales: item.sales,
        profit: item.profit,
      })),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.activateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.userId,
      { isActive: true },
      { new: true }
    );
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deactivateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.userId,
      { isActive: false },
      { new: true }
    );
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.userId);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("seller", "name");
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.approveProduct = async (req, res) => {
  try {
    // Find the product and update its status
    const product = await Product.findByIdAndUpdate(
      req.params.productId,
      { approvalStatus: "Approved" },
      { new: true }
    ).populate("seller");

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Send approval email to the seller
    await emailService.sendProductApprovalEmail(
      product.seller.email,
      product.name
    );

    res.json({ message: "Product approved and seller notified", product });
  } catch (error) {
    console.error("Error in approveProduct:", error);
    res
      .status(500)
      .json({ message: "Error approving product", error: error.message });
  }
};


exports.rejectProduct = async (req, res) => {
  try {
    // Find the product and update its status
    const product = await Product.findByIdAndUpdate(
      req.params.productId,
      { approvalStatus: "Rejected" },
      { new: true }
    ).populate("seller");

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Send rejection email to the seller
    await emailService.sendProductRejectionEmail(
      product.seller.email,
      product.name,
      req.body.reason
    );

    res.json({ message: "Product rejected and seller notified", product });
  } catch (error) {
    console.error("Error in rejectProduct:", error);
    res
      .status(500)
      .json({ message: "Error rejecting product", error: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.productId);
    await Variant.deleteMany({ productId: req.params.productId });
    res.json({ message: "Product and its variants deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("userId", "name");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.completeOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.orderId,
      { paymentStatus: "Completed" },
      { new: true }
    );
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

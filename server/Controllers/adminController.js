// const User = require("../Models/User");
// const { Product, Variant } = require("../Models/Product");
// const Order = require("../Models/Order");
// const emailService = require('../utils/emailService');
// const Contact = require("../Models/Contact");
// const nodemailer = require("nodemailer");



// exports.getDashboardStats = async (req, res) => {
//   try {
//     const totalUsers = await User.countDocuments();
//     const totalSales = await Order.aggregate([
//       { $group: { _id: null, total: { $sum: "$totalAmount" } } },
//     ]);
//     const totalProfit = totalSales[0]?.total * 0.05 || 0; // Assuming 10% profit

//     // Get sales data for the last 30 days
//     const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
//     const salesData = await Order.aggregate([
//       { $match: { createdAt: { $gte: thirtyDaysAgo } } },
//       {
//         $group: {
//           _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
//           sales: { $sum: "$totalAmount" },
//           profit: { $sum: { $multiply: ["$totalAmount", 0.1] } },
//         },
//       },
//       { $sort: { _id: 1 } },
//     ]);

//     res.json({
//       totalUsers,
//       totalSales: totalSales[0]?.total || 0,
//       totalProfit,
//       salesData: salesData.map((item) => ({
//         date: item._id,
//         sales: item.sales,
//         profit: item.profit,
//       })),
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.getUsers = async (req, res) => {
//   try {
//     const users = await User.find().select("-password");
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.activateUser = async (req, res) => {
//   try {
//     const user = await User.findByIdAndUpdate(
//       req.params.userId,
//       { isActive: true },
//       { new: true }
//     );
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.deactivateUser = async (req, res) => {
//   try {
//     const user = await User.findByIdAndUpdate(
//       req.params.userId,
//       { isActive: false },
//       { new: true }
//     );
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.deleteUser = async (req, res) => {
//   try {
//     await User.findByIdAndDelete(req.params.userId);
//     res.json({ message: "User deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.getProducts = async (req, res) => {
//   try {
//     const products = await Product.find().populate("seller", "name");
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
// exports.approveProduct = async (req, res) => {
//   try {
//     // Find the product and update its status
//     const product = await Product.findByIdAndUpdate(
//       req.params.productId,
//       { approvalStatus: "Approved" },
//       { new: true }
//     ).populate("seller");

//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     // Send approval email to the seller
//     await emailService.sendProductApprovalEmail(
//       product.seller.email,
//       product.name
//     );

//     res.json({ message: "Product approved and seller notified", product });
//   } catch (error) {
//     console.error("Error in approveProduct:", error);
//     res
//       .status(500)
//       .json({ message: "Error approving product", error: error.message });
//   }
// };


// exports.rejectProduct = async (req, res) => {
//   try {
//     // Find the product and update its status
//     const product = await Product.findByIdAndUpdate(
//       req.params.productId,
//       { approvalStatus: "Rejected" },
//       { new: true }
//     ).populate("seller");

//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     // Send rejection email to the seller
//     await emailService.sendProductRejectionEmail(
//       product.seller.email,
//       product.name,
//       req.body.reason
//     );

//     res.json({ message: "Product rejected and seller notified", product });
//   } catch (error) {
//     console.error("Error in rejectProduct:", error);
//     res
//       .status(500)
//       .json({ message: "Error rejecting product", error: error.message });
//   }
// };

// exports.deleteProduct = async (req, res) => {
//   try {
//     await Product.findByIdAndDelete(req.params.productId);
//     await Variant.deleteMany({ productId: req.params.productId });
//     res.json({ message: "Product and its variants deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.getOrders = async (req, res) => {
//   try {
//     const orders = await Order.find().populate("userId", "name");
//     res.json(orders);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.completeOrder = async (req, res) => {
//   try {
//     const order = await Order.findByIdAndUpdate(
//       req.params.orderId,
//       { paymentStatus: "Completed" },
//       { new: true }
//     );
//     res.json(order);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }


// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// exports.getAllMessages = async (req, res) => {
//   try {
//     const messages = await Contact.find().sort({ createdAt: -1 });
//     res.json({ success: true, messages });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

// exports.respondToMessage = async (req, res) => {
//   try {
//     const { messageId } = req.params;
//     const { response } = req.body;

//     const message = await Contact.findById(messageId);
//     if (!message) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Message not found" });
//     }

//     // Send response email
//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: message.email,
//       subject: `Re: ${message.subject}`,
//       html: `
//         <h3>Dear ${message.name},</h3>
//         <p>${response}</p>
//         <br>
//         <p>Best regards,</p>
//         <p>SecondChance Team</p>
//       `,
//     });

//     // Update message status
//     message.status = "responded";
//     await message.save();

//     res.json({ success: true, message: "Response sent successfully" });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };


// };


const User = require("../Models/User");
const { Product, Variant } = require("../Models/Product");
const Order = require("../Models/Order");
const emailService = require("../utils/emailService");
const Contact = require("../Models/Contact");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const adminController = {
  getDashboardStats: async (req, res) => {
    try {
      const totalUsers = await User.countDocuments();
      const totalSales = await Order.aggregate([
        { $group: { _id: null, total: { $sum: "$totalAmount" } } },
      ]);
      const totalProfit = totalSales[0]?.total * 0.05 || 0;

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
  },

  getUsers: async (req, res) => {
    try {
      const users = await User.find().select("-password");
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  activateUser: async (req, res) => {
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
  },

  deactivateUser: async (req, res) => {
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
  },

  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.userId);
      res.json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getProducts: async (req, res) => {
    try {
      const products = await Product.find().populate("seller", "name");
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  approveProduct: async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(
        req.params.productId,
        { approvalStatus: "Approved" },
        { new: true }
      ).populate("seller");

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      await emailService.sendProductApprovalEmail(
        product.seller.email,
        product.name
      );

      res.json({ message: "Product approved and seller notified", product });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error approving product", error: error.message });
    }
  },

  rejectProduct: async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(
        req.params.productId,
        { approvalStatus: "Rejected" },
        { new: true }
      ).populate("seller");

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      await emailService.sendProductRejectionEmail(
        product.seller.email,
        product.name,
        req.body.reason
      );

      res.json({ message: "Product rejected and seller notified", product });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error rejecting product", error: error.message });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.productId);
      await Variant.deleteMany({ productId: req.params.productId });
      res.json({ message: "Product and its variants deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getOrders: async (req, res) => {
    try {
      const orders = await Order.find().populate("userId", "name");
      res.json(orders);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  completeOrder: async (req, res) => {
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
  },

  getAllMessages: async (req, res) => {
    try {
      const messages = await Contact.find().sort({ createdAt: -1 });
      res.json({ success: true, messages });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  respondToMessage: async (req, res) => {
    try {
      const { messageId } = req.params;
      const { response } = req.body;

      const message = await Contact.findById(messageId);
      if (!message) {
        return res
          .status(404)
          .json({ success: false, message: "Message not found" });
      }

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: message.email,
        subject: `Re: ${message.subject}`,
        html: `
          <h3>Dear ${message.name},</h3>
          <p>${response}</p>
          <br>
          <p>Best regards,</p>
          <p>SecondChance Team</p>
        `,
      });

      message.status = "responded";
      await message.save();

      res.json({ success: true, message: "Response sent successfully" });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },
};

module.exports = adminController;

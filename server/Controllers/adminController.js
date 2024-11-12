// // const User = require("../Models/User");
// // const { Product, Variant } = require("../Models/Product");
// // const Order = require("../Models/Order");
// // const emailService = require('../utils/emailService');
// // const Contact = require("../Models/Contact");
// // const nodemailer = require("nodemailer");



// // exports.getDashboardStats = async (req, res) => {
// //   try {
// //     const totalUsers = await User.countDocuments();
// //     const totalSales = await Order.aggregate([
// //       { $group: { _id: null, total: { $sum: "$totalAmount" } } },
// //     ]);
// //     const totalProfit = totalSales[0]?.total * 0.05 || 0; // Assuming 10% profit

// //     // Get sales data for the last 30 days
// //     const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
// //     const salesData = await Order.aggregate([
// //       { $match: { createdAt: { $gte: thirtyDaysAgo } } },
// //       {
// //         $group: {
// //           _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
// //           sales: { $sum: "$totalAmount" },
// //           profit: { $sum: { $multiply: ["$totalAmount", 0.1] } },
// //         },
// //       },
// //       { $sort: { _id: 1 } },
// //     ]);

// //     res.json({
// //       totalUsers,
// //       totalSales: totalSales[0]?.total || 0,
// //       totalProfit,
// //       salesData: salesData.map((item) => ({
// //         date: item._id,
// //         sales: item.sales,
// //         profit: item.profit,
// //       })),
// //     });
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };

// // exports.getUsers = async (req, res) => {
// //   try {
// //     const users = await User.find().select("-password");
// //     res.json(users);
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };

// // exports.activateUser = async (req, res) => {
// //   try {
// //     const user = await User.findByIdAndUpdate(
// //       req.params.userId,
// //       { isActive: true },
// //       { new: true }
// //     );
// //     res.json(user);
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };

// // exports.deactivateUser = async (req, res) => {
// //   try {
// //     const user = await User.findByIdAndUpdate(
// //       req.params.userId,
// //       { isActive: false },
// //       { new: true }
// //     );
// //     res.json(user);
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };

// // exports.deleteUser = async (req, res) => {
// //   try {
// //     await User.findByIdAndDelete(req.params.userId);
// //     res.json({ message: "User deleted successfully" });
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };

// // exports.getProducts = async (req, res) => {
// //   try {
// //     const products = await Product.find().populate("seller", "name");
// //     res.json(products);
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };
// // exports.approveProduct = async (req, res) => {
// //   try {
// //     // Find the product and update its status
// //     const product = await Product.findByIdAndUpdate(
// //       req.params.productId,
// //       { approvalStatus: "Approved" },
// //       { new: true }
// //     ).populate("seller");

// //     if (!product) {
// //       return res.status(404).json({ message: "Product not found" });
// //     }

// //     // Send approval email to the seller
// //     await emailService.sendProductApprovalEmail(
// //       product.seller.email,
// //       product.name
// //     );

// //     res.json({ message: "Product approved and seller notified", product });
// //   } catch (error) {
// //     console.error("Error in approveProduct:", error);
// //     res
// //       .status(500)
// //       .json({ message: "Error approving product", error: error.message });
// //   }
// // };


// // exports.rejectProduct = async (req, res) => {
// //   try {
// //     // Find the product and update its status
// //     const product = await Product.findByIdAndUpdate(
// //       req.params.productId,
// //       { approvalStatus: "Rejected" },
// //       { new: true }
// //     ).populate("seller");

// //     if (!product) {
// //       return res.status(404).json({ message: "Product not found" });
// //     }

// //     // Send rejection email to the seller
// //     await emailService.sendProductRejectionEmail(
// //       product.seller.email,
// //       product.name,
// //       req.body.reason
// //     );

// //     res.json({ message: "Product rejected and seller notified", product });
// //   } catch (error) {
// //     console.error("Error in rejectProduct:", error);
// //     res
// //       .status(500)
// //       .json({ message: "Error rejecting product", error: error.message });
// //   }
// // };

// // exports.deleteProduct = async (req, res) => {
// //   try {
// //     await Product.findByIdAndDelete(req.params.productId);
// //     await Variant.deleteMany({ productId: req.params.productId });
// //     res.json({ message: "Product and its variants deleted successfully" });
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };

// // exports.getOrders = async (req, res) => {
// //   try {
// //     const orders = await Order.find().populate("userId", "name");
// //     res.json(orders);
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };

// // exports.completeOrder = async (req, res) => {
// //   try {
// //     const order = await Order.findByIdAndUpdate(
// //       req.params.orderId,
// //       { paymentStatus: "Completed" },
// //       { new: true }
// //     );
// //     res.json(order);
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }


// // const transporter = nodemailer.createTransport({
// //   service: "gmail",
// //   auth: {
// //     user: process.env.EMAIL_USER,
// //     pass: process.env.EMAIL_PASS,
// //   },
// // });

// // exports.getAllMessages = async (req, res) => {
// //   try {
// //     const messages = await Contact.find().sort({ createdAt: -1 });
// //     res.json({ success: true, messages });
// //   } catch (error) {
// //     res.status(500).json({ success: false, message: error.message });
// //   }
// // };

// // exports.respondToMessage = async (req, res) => {
// //   try {
// //     const { messageId } = req.params;
// //     const { response } = req.body;

// //     const message = await Contact.findById(messageId);
// //     if (!message) {
// //       return res
// //         .status(404)
// //         .json({ success: false, message: "Message not found" });
// //     }

// //     // Send response email
// //     await transporter.sendMail({
// //       from: process.env.EMAIL_USER,
// //       to: message.email,
// //       subject: `Re: ${message.subject}`,
// //       html: `
// //         <h3>Dear ${message.name},</h3>
// //         <p>${response}</p>
// //         <br>
// //         <p>Best regards,</p>
// //         <p>SecondChance Team</p>
// //       `,
// //     });

// //     // Update message status
// //     message.status = "responded";
// //     await message.save();

// //     res.json({ success: true, message: "Response sent successfully" });
// //   } catch (error) {
// //     res.status(500).json({ success: false, message: error.message });
// //   }
// // };


// // };


// const User = require("../Models/User");
// const { Product, Variant } = require("../Models/Product");
// const Order = require("../Models/Order");
// const emailService = require("../utils/emailService");
// const Contact = require("../Models/Contact");
// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// const adminController = {
//   getDashboardStats: async (req, res) => {
//     try {
//       const totalUsers = await User.countDocuments();
//       const totalSales = await Order.aggregate([
//         { $group: { _id: null, total: { $sum: "$totalAmount" } } },
//       ]);
//       const totalProfit = totalSales[0]?.total * 0.05 || 0;

//       const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
//       const salesData = await Order.aggregate([
//         { $match: { createdAt: { $gte: thirtyDaysAgo } } },
//         {
//           $group: {
//             _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
//             sales: { $sum: "$totalAmount" },
//             profit: { $sum: { $multiply: ["$totalAmount", 0.1] } },
//           },
//         },
//         { $sort: { _id: 1 } },
//       ]);

//       res.json({
//         totalUsers,
//         totalSales: totalSales[0]?.total || 0,
//         totalProfit,
//         salesData: salesData.map((item) => ({
//           date: item._id,
//           sales: item.sales,
//           profit: item.profit,
//         })),
//       });
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   },

//   getUsers: async (req, res) => {
//     try {
//       const users = await User.find().select("-password");
//       res.json(users);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   },

//   activateUser: async (req, res) => {
//     try {
//       const user = await User.findByIdAndUpdate(
//         req.params.userId,
//         { isActive: true },
//         { new: true }
//       );
//       res.json(user);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   },

//   deactivateUser: async (req, res) => {
//     try {
//       const user = await User.findByIdAndUpdate(
//         req.params.userId,
//         { isActive: false },
//         { new: true }
//       );
//       res.json(user);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   },

//   deleteUser: async (req, res) => {
//     try {
//       await User.findByIdAndDelete(req.params.userId);
//       res.json({ message: "User deleted successfully" });
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   },

//   getProducts: async (req, res) => {
//     try {
//       const products = await Product.find().populate("seller", "name");
//       res.json(products);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   },

//   approveProduct: async (req, res) => {
//     try {
//       const product = await Product.findByIdAndUpdate(
//         req.params.productId,
//         { approvalStatus: "Approved" },
//         { new: true }
//       ).populate("seller");

//       if (!product) {
//         return res.status(404).json({ message: "Product not found" });
//       }

//       await emailService.sendProductApprovalEmail(
//         product.seller.email,
//         product.name
//       );

//       res.json({ message: "Product approved and seller notified", product });
//     } catch (error) {
//       res
//         .status(500)
//         .json({ message: "Error approving product", error: error.message });
//     }
//   },

//   rejectProduct: async (req, res) => {
//     try {
//       const product = await Product.findByIdAndUpdate(
//         req.params.productId,
//         { approvalStatus: "Rejected" },
//         { new: true }
//       ).populate("seller");

//       if (!product) {
//         return res.status(404).json({ message: "Product not found" });
//       }

//       await emailService.sendProductRejectionEmail(
//         product.seller.email,
//         product.name,
//         req.body.reason
//       );

//       res.json({ message: "Product rejected and seller notified", product });
//     } catch (error) {
//       res
//         .status(500)
//         .json({ message: "Error rejecting product", error: error.message });
//     }
//   },

//   deleteProduct: async (req, res) => {
//     try {
//       await Product.findByIdAndDelete(req.params.productId);
//       await Variant.deleteMany({ productId: req.params.productId });
//       res.json({ message: "Product and its variants deleted successfully" });
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   },

//   getOrders: async (req, res) => {
//     try {
//       const orders = await Order.find().populate("userId", "name");
//       res.json(orders);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   },

//   completeOrder: async (req, res) => {
//     try {
//       const order = await Order.findByIdAndUpdate(
//         req.params.orderId,
//         { paymentStatus: "Completed" },
//         { new: true }
//       );
//       res.json(order);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   },

//   getAllMessages: async (req, res) => {
//     try {
//       const messages = await Contact.find().sort({ createdAt: -1 });
//       res.json({ success: true, messages });
//     } catch (error) {
//       res.status(500).json({ success: false, message: error.message });
//     }
//   },

//   respondToMessage: async (req, res) => {
//     try {
//       const { messageId } = req.params;
//       const { response } = req.body;

//       const message = await Contact.findById(messageId);
//       if (!message) {
//         return res
//           .status(404)
//           .json({ success: false, message: "Message not found" });
//       }

//       await transporter.sendMail({
//         from: process.env.EMAIL_USER,
//         to: message.email,
//         subject: `Re: ${message.subject}`,
//         html: `
//           <h3>Dear ${message.name},</h3>
//           <p>${response}</p>
//           <br>
//           <p>Best regards,</p>
//           <p>SecondChance Team</p>
//         `,
//       });

//       message.status = "responded";
//       await message.save();

//       res.json({ success: true, message: "Response sent successfully" });
//     } catch (error) {
//       res.status(500).json({ success: false, message: error.message });
//     }
//   },
// };

// module.exports = adminController;



// Controllers/adminController.js
const User = require("../Models/User");
const { Product, Variant } = require("../Models/Product");
const Order = require("../Models/Order");
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
  // Dashboard Statistics
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

  // User Management
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

  // Product Management
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

      // Send approval email
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: product.seller.email,
        subject: "Your Product Has Been Approved!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2b6cb0;">Product Approved!</h2>
            <p>Dear ${product.seller.name},</p>
            <p>We're pleased to inform you that your product "${product.name}" has been approved and is now listed on SecondChance.</p>
            <p>Your product is now visible to all users and available for purchase.</p>
            <br>
            <p>Best regards,</p>
            <p>The SecondChance Team</p>
          </div>
        `,
      });

      res.json({ message: "Product approved and seller notified", product });
    } catch (error) {
      res.status(500).json({ message: "Error approving product", error: error.message });
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

      // Send rejection email
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: product.seller.email,
        subject: "Product Review Update",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2b6cb0;">Product Review Update</h2>
            <p>Dear ${product.seller.name},</p>
            <p>We have reviewed your product "${product.name}" and unfortunately, we cannot approve it at this time.</p>
            <p><strong>Reason for rejection:</strong></p>
            <p style="padding: 10px; background-color: #f8f8f8; border-left: 4px solid #e53e3e;">${req.body.reason}</p>
            <p>You can make the necessary adjustments and submit the product again for review.</p>
            <br>
            <p>Best regards,</p>
            <p>The SecondChance Team</p>
          </div>
        `,
      });

      res.json({ message: "Product rejected and seller notified", product });
    } catch (error) {
      res.status(500).json({ message: "Error rejecting product", error: error.message });
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

  // Order Management
  getOrders: async (req, res) => {
    try {
      const orders = await Order.find()
        .populate("userId", "name email")
        .sort({ createdAt: -1 });
      res.json(orders);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getOrderById: async (req, res) => {
    try {
      const order = await Order.findById(req.params.orderId)
        .populate("userId", "name email")
        .populate("items.productId", "name");
      
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }
      
      res.json(order);
    } catch (error) {
      res.status(500).json({ message: "Error fetching order details" });
    }
  },

  updateOrderStatus: async (req, res) => {
    try {
      const { orderId } = req.params;
      const { status } = req.body;

      // Validate status
      const validStatuses = ["Pending", "Shipped", "Delivered"];
      if (!validStatuses.includes(status)) {
        return res.status(400).json({ message: "Invalid status" });
      }

      const order = await Order.findById(orderId).populate("userId", "name email");
      
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }

      // Update order status
      order.deliveryStatus = status;
      await order.save();

      // Send email notification for specific statuses
      if (["Shipped", "Delivered"].includes(status)) {
        const emailContent = {
          Shipped: {
            subject: `Your Order #${order._id} Has Been Shipped!`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #2b6cb0;">Your Order is on its Way!</h2>
                <p>Dear ${order.userId.name},</p>
                <p>Great news! Your order #${order._id} has been shipped and is on its way to you.</p>
                <p>You can track your order status in your account dashboard.</p>
                <p>Thank you for choosing SecondChance!</p>
                <br>
                <p>Best regards,</p>
                <p>The SecondChance Team</p>
              </div>
            `
          },
          Delivered: {
            subject: `Your Order #${order._id} Has Been Delivered!`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #2b6cb0;">Your Order Has Been Delivered!</h2>
                <p>Dear ${order.userId.name},</p>
                <p>We're happy to inform you that your order #${order._id} has been successfully delivered!</p>
                <p>We hope you enjoy your purchase. If you have any questions or concerns, please don't hesitate to contact us.</p>
                <p>Thank you for shopping with SecondChance!</p>
                <br>
                <p>Best regards,</p>
                <p>The SecondChance Team</p>
              </div>
            `
          }
        };

        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: order.userId.email,
          subject: emailContent[status].subject,
          html: emailContent[status].html
        });
      }

      res.json({
        message: "Order status updated successfully",
        order
      });
    } catch (error) {
      console.error("Error updating order status:", error);
      res.status(500).json({ message: "Error updating order status" });
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

  // Message Management
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
        return res.status(404).json({ success: false, message: "Message not found" });
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
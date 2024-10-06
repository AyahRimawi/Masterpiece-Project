
const Order = require("../Models/Order");
const User = require("../Models/User");
const { Product, Variant } = require("../Models/Product");
const Cart = require("../Models/Cart");

const OrderController = {
  createOrder: async (req, res) => {
    try {
      const { paymentMethod, shippingAddress } = req.body;
      const userId = req.user.id;

      // Fetch the user's cart
      const cart = await Cart.findOne({ userId }).populate(
        "items.productId items.variantId"
      );
      if (!cart || cart.items.length === 0) {
        return res.status(400).json({ message: "Cart is empty" });
      }

      // Calculate total amount and prepare order items
      let totalAmount = 0;
      const orderItems = cart.items.map((item) => {
        const itemTotal = item.variantId.price * item.quantity;
        totalAmount += itemTotal;
        return {
          variantId: item.variantId._id,
          productId: item.productId._id,
          productName: item.productId.name,
          color: item.variantId.color,
          size: item.variantId.size,
          image: item.variantId.overviewPicture,
          price: item.variantId.price,
          quantity: item.quantity,
        };
      });

      // Create the order
      const newOrder = new Order({
        userId,
        items: orderItems,
        totalAmount,
        paymentMethod,
        shippingAddress,
      });

      await newOrder.save();

      // Clear the user's cart
      cart.items = [];
      await cart.save();

      res
        .status(201)
        .json({ message: "Order created successfully", order: newOrder });
    } catch (error) {
      console.error("Error creating order:", error);
      res
        .status(500)
        .json({ message: "Error creating order", error: error.message });
    }
  },

  getUserOrders: async (req, res) => {
    try {
      const userId = req.user.id;
      const orders = await Order.find({ userId }).sort({ createdAt: -1 });
      res.status(200).json(orders);
    } catch (error) {
      console.error("Error fetching user orders:", error);
      res
        .status(500)
        .json({ message: "Error fetching orders", error: error.message });
    }
  },

  getOrderById: async (req, res) => {
    try {
      const orderId = req.params.orderId;
      const order = await Order.findById(orderId);
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }
      res.status(200).json(order);
    } catch (error) {
      console.error("Error fetching order:", error);
      res
        .status(500)
        .json({ message: "Error fetching order", error: error.message });
    }
  },
};

module.exports = OrderController;
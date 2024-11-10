const Order = require("../Models/Order");
const Cart = require("../Models/Cart");
const { Product, Variant } = require("../Models/Product");


const orderController = {
  //todoo ------------------------------------
  createOrder: async (req, res) => {
    try {
      //         console.log(
      //           "Received order data:",
      //           JSON.stringify(req.body, null, 2)
      // );
      console.log("Received order creation request");
      console.log("Request body:", req.body);

      const userId = req.user.id;
      const {
        items,
        totalAmount,
        paymentMethod,
        shippingAddress,
        paypalOrderId,
      } = req.body;

      // تحقق إضافي من البيانات
      if (!items || items.length === 0) {
        return res
          .status(400)
          .json({ message: "Order must contain at least one item" });
      }

      // التحقق من الكمية المتوفرة وتحديثها
      for (const item of items) {
        const variant = await Variant.findById(item.variantId);
        if (!variant) {
          return res.status(404).json({
            message: `Variant not found for item: ${item.productName}`,
          });
        }

        if (variant.quantity < item.quantity) {
          return res.status(400).json({
            message: `Not enough quantity available for ${item.productName}`,
          });
        }

        // تحديث الكمية
        variant.quantity -= item.quantity;
        await variant.save();

        // إذا أصبحت الكمية صفر، قم بتحديث حالة المنتج كمباع
        if (variant.quantity === 0) {
          const product = await Product.findById(variant.productId);
          const otherVariants = await Variant.find({
            productId: variant.productId,
            _id: { $ne: variant._id },
            quantity: { $gt: 0 },
          });

          if (otherVariants.length === 0) {
            product.isSold = true;
            await product.save();
          }
        }
      }

      const newOrder = new Order({
        userId,
        items: items.map((item) => ({
          productId: item.productId,
          variantId: item.variantId,
          quantity: item.quantity,
          price: item.price,
          productName: item.productName,
          color: item.color,
          size: item.size,
          image: item.image,
        })),
        totalAmount,
        paymentMethod,
        shippingAddress,
        paymentStatus: paymentMethod === "PayPal" ? "Completed" : "Pending",
        deliveryStatus: "Pending", // إضافة حالة التوصيل الافتراضية
        ...(paypalOrderId && { paypalOrderId }),
      });

      const savedOrder = await newOrder.save();
      res
        .status(201)
        .json({ message: "Order created successfully", order: savedOrder });
    } catch (error) {
      console.error("Error creating order:", error);
      res
        .status(500)
        .json({ message: "Error creating order", error: error.message });
    }
  },
  //todoo ------------------------------------
  getUserOrders: async (req, res) => {
    try {
      console.log("Received request for user orders");
      const orders = await Order.find({ userId: req.user.id }).sort({
        createdAt: -1,
      }); // Sort by newest first

      res.json(orders);
    } catch (error) {
      console.error("Error fetching user orders:", error);
      res.status(500).json({
        message: "Error fetching orders",
        error: error.message,
      });
    }
  },
};

module.exports = orderController;

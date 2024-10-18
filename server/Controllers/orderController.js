// const Order = require("../Models/Order");
// const User = require("../Models/User");
// const { Product, Variant } = require("../Models/Product");
// const Cart = require("../Models/Cart");

// const OrderController = {
//   createOrder: async (req, res) => {
//     try {
//       console.log("Received order data:", JSON.stringify(req.body, null, 2));

//       const {
//         userId,
//         items,
//         totalAmount,
//         paymentMethod,
//         shippingAddress,
//         paypalOrderId,
//       } = req.body;

//       if (
//         !shippingAddress ||
//         !shippingAddress.governorate ||
//         !shippingAddress.details
//       ) {
//         return res
//           .status(400)
//           .json({ message: "Shipping address is incomplete" });
//       }

//       if (!items || items.length === 0) {
//         return res
//           .status(400)
//           .json({ message: "Order must contain at least one item" });
//       }

//       const newOrder = new Order({
//         userId,
//         items,
//         totalAmount,
//         paymentMethod,
//         shippingAddress,
//         paymentStatus: paymentMethod === "PayPal" ? "Completed" : "Pending",
//         ...(paypalOrderId && { paypalOrderId }),
//       });

//       console.log("New order object:", JSON.stringify(newOrder, null, 2));

//       const savedOrder = await newOrder.save();

//       // Update user's orders array
//       await User.findByIdAndUpdate(userId, {
//         $push: { orders: savedOrder._id },
//       });

//       res
//         .status(201)
//         .json({ message: "Order created successfully", order: savedOrder });
//     } catch (error) {
//       console.error("Error creating order:", error);
//       res
//         .status(500)
//         .json({ message: "Error creating order", error: error.message });
//     }
//   },

//   getUserOrders: async (req, res) => {
//     try {
//       const userId = req.user.id;
//       const orders = await Order.find({ userId }).sort({ createdAt: -1 });
//       res.status(200).json(orders);
//     } catch (error) {
//       console.error("Error fetching user orders:", error);
//       res
//         .status(500)
//         .json({ message: "Error fetching orders", error: error.message });
//     }
//   },

//   getOrderById: async (req, res) => {
//     try {
//       const orderId = req.params.orderId;
//       const order = await Order.findById(orderId);
//       if (!order) {
//         return res.status(404).json({ message: "Order not found" });
//       }
//       res.status(200).json(order);
//     } catch (error) {
//       console.error("Error fetching order:", error);
//       res
//         .status(500)
//         .json({ message: "Error fetching order", error: error.message });
//     }
//   },
// };

// module.exports = OrderController;

// const Order = require("../Models/Order");
// const Cart = require("../Models/Cart");

// const orderController = {
//   createOrder: async (req, res) => {
//     try {
//       console.log("Received order data:", JSON.stringify(req.body, null, 2));

//       const { paymentMethod, shippingAddress, paypalOrderId } = req.body;
//       const userId = req.user._id; // تأكد من أن هذا متوفر من خلال middleware المصادقة

//       // جلب السلة الحالية للمستخدم
//       const cart = await Cart.findOne({ userId }).populate({
//         path: "items.variantId",
//         select: "price",
//       });

//       if (!cart || cart.items.length === 0) {
//         return res.status(400).json({ message: "Cart is empty" });
//       }

//       // إعداد عناصر الطلب
//       const orderItems = cart.items.map((item) => ({
//         productId: item.productId,
//         variantId: item.variantId._id,
//         quantity: item.quantity,
//         price: item.variantId.price,
//       }));

//       // حساب المبلغ الإجمالي
//       const totalAmount = orderItems.reduce(
//         (sum, item) => sum + item.price * item.quantity,
//         0
//       );

//       const newOrder = new Order({
//         userId,
//         items: orderItems,
//         totalAmount,
//         paymentMethod,
//         shippingAddress,
//         paymentStatus: paymentMethod === "PayPal" ? "Completed" : "Pending",
//         ...(paypalOrderId && { paypalOrderId }),
//       });

//       console.log("New order object:", JSON.stringify(newOrder, null, 2));

//       const savedOrder = await newOrder.save();

//       // مسح السلة بعد إنشاء الطلب
//       await Cart.findOneAndUpdate({ userId }, { $set: { items: [] } });

//       res
//         .status(201)
//         .json({ message: "Order created successfully", order: savedOrder });
//     } catch (error) {
//       console.error("Error creating order:", error);
//       res
//         .status(500)
//         .json({ message: "Error creating order", error: error.message });
//     }
//   },

//   // يمكنك إضافة المزيد من الوظائف هنا مثل getOrders, updateOrderStatus, etc.
// };

// module.exports = orderController;

const Order = require("../Models/Order");
const Cart = require("../Models/Cart");

const orderController = {
  // createOrder: async (req, res) => {
  //     try {
        // console.log("Received order data:", JSON.stringify(req.body, null, 2));

  //       const {
  //         items,
  //         totalAmount,
  //         paymentMethod,
  //         shippingAddress,
  //         paypalOrderId,
  //       } = req.body;

  //       // تحقق من وجود req.user
  //       if (!req.user || !req.user._id) {
  //         return res.status(401).json({ message: "User not authenticated" });
  //       }

  //       const userId = req.user._id;

  //       // تحويل عناصر الطلب إلى الشكل المطلوب
  //       const orderItems = items.map((item) => ({
  //         productId: item.productId._id,
  //         variantId: item.variantId._id,
  //         quantity: item.quantity,
  //         price: item.variantId.price,
  //       }));

  //       const newOrder = new Order({
  //         userId,
  //         items: orderItems,
  //         totalAmount: parseFloat(totalAmount),
  //         paymentMethod,
  //         shippingAddress,
  //         paymentStatus: paymentMethod === "PayPal" ? "Completed" : "Pending",
  //         ...(paypalOrderId && { paypalOrderId }),
  //       });

  //       console.log("New order object:", JSON.stringify(newOrder, null, 2));

  //       const savedOrder = await newOrder.save();

  //       // مسح السلة بعد إنشاء الطلب
  //       await Cart.findOneAndUpdate({ userId }, { $set: { items: [] } });

  //       res
  //         .status(201)
  //         .json({ message: "Order created successfully", order: savedOrder });
  //     } catch (error) {
  //       console.error("Error creating order:", error);
  //       if (error.name === "ValidationError") {
  //         const validationErrors = Object.values(error.errors).map(
  //           (err) => err.message
  //         );
  //         return res
  //           .status(400)
  //           .json({ message: "Validation error", errors: validationErrors });
  //       }
  //       res
  //         .status(500)
  //         .json({ message: "Error creating order", error: error.message });
  //   }
  // },
  // };

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
};

module.exports = orderController;

const Order = require("../Models/Order");
const User = require("../Models/User");
const Product = require("../Models/Product");

exports.createOrder = async (req, res) => {
  try {
    const { items, totalAmount, paymentMethod, shippingAddress } = req.body;
    const userId = req.user.id; // This now comes from the authMiddleware

    const newOrder = new Order({
      userId,
      items,
      totalAmount,
      paymentMethod,
      shippingAddress,
    });

    const savedOrder = await newOrder.save();

    // Update user's orders array
    await User.findByIdAndUpdate(userId, { $push: { orders: savedOrder._id } });

    // Update product quantities
    for (let item of items) {
      await Product.findByIdAndUpdate(item.productId, {
        $inc: { quantity: -item.quantity },
      });
    }

    res.status(201).json(savedOrder);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};

exports.getAllOrdersForUser = async (req, res) => {
  try {
    const userId = req.user.id; // This now comes from the authMiddleware
    const orders = await Order.find({ userId }).populate("items.productId");
    res.status(200).json(orders);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(updatedOrder);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};

// exports.getAllOrdersForSeller = async (req, res) => {
//   try {
//     const sellerId = req.params.sellerId; // Get sellerId from route parameter

//     // Find all products of the seller
//     const sellerProducts = await Product.find({ seller: sellerId });
//     const sellerProductIds = sellerProducts.map((product) => product._id);

//     // Find all orders that contain the seller's products
//     const orders = await Order.find({
//       "items.productId": { $in: sellerProductIds },
//     }).populate("items.productId");

//     // Filter out items in each order that don't belong to the seller
//     const filteredOrders = orders.map((order) => ({
//       ...order.toObject(),
//       items: order.items.filter((item) =>
//         sellerProductIds.some((id) => id.equals(item.productId._id))
//       ),
//     }));

//     res.status(200).json(filteredOrders);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Server error");
//   }
// };
// exports.getOrderAmountsForSeller = async (req, res) => {
//   try {
//     const sellerId = req.params.sellerId; // Get sellerId from route parameter

//     // Find all products of the seller
//     const sellerProducts = await Product.find({ seller: sellerId });
//     const sellerProductIds = sellerProducts.map((product) => product._id);

//     // Find all orders that contain the seller's products
//     const orders = await Order.find({
//       "items.productId": { $in: sellerProductIds },
//     }).populate("items.productId");

//     let totalAmount = 0;
//     let orderCount = 0;

//     orders.forEach((order) => {
//       order.items.forEach((item) => {
//         if (sellerProductIds.some((id) => id.equals(item.productId._id))) {
//           totalAmount += item.quantity * item.productId.price;
//           orderCount++;
//         }
//       });
//     });

//     res.status(200).json({ totalAmount, orderCount });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Server error");
//   }
// };

exports.getAllOrdersForSeller = async (req, res) => {
  try {
    const sellerId = req.params.sellerId;

    // Find all products of the seller
    const sellerProducts = await Product.find({ seller: sellerId }, "_id");
    const sellerProductIds = sellerProducts.map((product) => product._id);

    // Find all orders that contain the seller's products
    const orders = await Order.find({
      "items.productId": { $in: sellerProductIds },
    }).select("items.productId items.quantity totalAmount status createdAt");

    // Filter out items in each order that don't belong to the seller
    const filteredOrders = orders.map((order) => ({
      ...order.toObject(),
      items: order.items.filter((item) =>
        sellerProductIds.some((id) => id.equals(item.productId))
      ),
    }));

    res.status(200).json(filteredOrders);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};

exports.getOrderAmountsForSeller = async (req, res) => {
  try {
    const sellerId = req.params.sellerId;

    // Find all products of the seller
    const sellerProducts = await Product.find(
      { seller: sellerId },
      "_id price"
    );
    const sellerProductMap = new Map(
      sellerProducts.map((p) => [p._id.toString(), p.price])
    );

    // Find all orders that contain the seller's products
    const orders = await Order.find({
      "items.productId": { $in: sellerProducts.map((p) => p._id) },
    }).select("items.productId items.quantity");

    let totalAmount = 0;
    let totalQuantity = 0;
    let orderCount = 0;
    let productSales = {};

    orders.forEach((order) => {
      order.items.forEach((item) => {
        if (sellerProductMap.has(item.productId.toString())) {
          const price = sellerProductMap.get(item.productId.toString());
          const amount = item.quantity * price;
          totalAmount += amount;
          totalQuantity += item.quantity;

          if (!productSales[item.productId]) {
            productSales[item.productId] = { quantity: 0, amount: 0 };
          }
          productSales[item.productId].quantity += item.quantity;
          productSales[item.productId].amount += amount;
        }
      });
      orderCount++;
    });

    res.status(200).json({
      totalAmount,
      totalQuantity,
      orderCount,
      productSales,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};

// totalAmount: إجمالي المبلغ لجميع المبيعات.
// totalQuantity: إجمالي الكمية المباعة.
// orderCount: عدد الطلبات.
// productSales: تفاصيل المبيعات لكل منتج (الكمية والمبلغ).

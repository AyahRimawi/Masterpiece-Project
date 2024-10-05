
const Order = require("../Models/Order");
const User = require("../Models/User");
const { Product, Variant } = require("../Models/Product");

exports.createOrder = async (req, res) => {
  try {
    const { items, totalAmount, paymentMethod, shippingAddress } = req.body;
    const userId = req.user.id;

    // Validate and populate item information
    const populatedItems = await Promise.all(
      items.map(async (item) => {
        const variant = await Variant.findById(item.variantId).populate(
          "productId"
        );
        if (!variant) {
          throw new Error(`Variant not found: ${item.variantId}`);
        }
        return {
          variantId: variant._id,
          productId: variant.productId._id,
          productName: variant.productId.name,
          color: variant.color,
          size: variant.size,
          image: variant.image,
          price: variant.price,
          quantity: item.quantity,
        };
      })
    );

    const newOrder = new Order({
      userId,
      items: populatedItems,
      totalAmount,
      paymentMethod,
      shippingAddress,
    });

    const savedOrder = await newOrder.save();

    // Update user's orders array
    await User.findByIdAndUpdate(userId, { $push: { orders: savedOrder._id } });

    // Update variant quantities
    for (let item of populatedItems) {
      await Variant.findByIdAndUpdate(item.variantId, {
        $inc: { quantity: -item.quantity },
      });
    }

    res.status(201).json(savedOrder);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error: " + error.message);
  }
};

exports.getAllOrdersForUser = async (req, res) => {
  try {
    const userId = req.user.id;
    const orders = await Order.find({ userId }).populate({
      path: "items.variantId",
      populate: { path: "productId" },
    });
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

exports.getAllOrdersForSeller = async (req, res) => {
  try {
    const sellerId = req.params.sellerId;

    // Find all products of the seller
    const sellerProducts = await Product.find({ seller: sellerId }, "_id");
    const sellerProductIds = sellerProducts.map((product) => product._id);

    // Find all orders that contain the seller's products
    const orders = await Order.find({
      "items.productId": { $in: sellerProductIds },
    }).select("items totalAmount status createdAt");

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
    const sellerProducts = await Product.find({ seller: sellerId }, "_id");
    const sellerProductIds = sellerProducts.map((product) => product._id);

    // Find all orders that contain the seller's products
    const orders = await Order.find({
      "items.productId": { $in: sellerProductIds },
    }).select("items");

    let totalAmount = 0;
    let totalQuantity = 0;
    let orderCount = 0;
    let variantSales = {};

    orders.forEach((order) => {
      order.items.forEach((item) => {
        if (sellerProductIds.some((id) => id.equals(item.productId))) {
          const amount = item.quantity * item.price;
          totalAmount += amount;
          totalQuantity += item.quantity;

          if (!variantSales[item.variantId]) {
            variantSales[item.variantId] = { quantity: 0, amount: 0 };
          }
          variantSales[item.variantId].quantity += item.quantity;
          variantSales[item.variantId].amount += amount;
        }
      });
      orderCount++;
    });

    res.status(200).json({
      totalAmount,
      totalQuantity,
      orderCount,
      variantSales,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};
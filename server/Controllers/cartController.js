const Cart = require("../Models/Cart");
const { Product, Variant } = require("../Models/Product");

const CartController = {
  getCart: async (req, res) => {
    try {
      const userId = req.user ? req.user.id : null;
      const sessionId = req.sessionID || "guest";

      let cart = await Cart.findOne(userId ? { userId } : { sessionId })
        .populate({
          path: "items.productId",
          select: "name",
        })
        .populate({
          path: "items.variantId",
          select: "color size overviewPicture price", // أضف price هنا
        });

      if (!cart) {
        cart = new Cart({ userId, sessionId, items: [] });
      }
      cart.items = cart.items.map((item) => ({
        ...item.toObject(),
        totalPrice: item.quantity * item.variantId.price,
      }));
      res.status(200).json(cart);
    } catch (error) {
      console.error("Error fetching cart:", error);
      res
        .status(500)
        .json({ message: "Error fetching cart", error: error.message });
    }
  },

  addToCart: async (req, res) => {
    try {
      const { productId, variantId, quantity } = req.body;
      const userId = req.user ? req.user.id : null;
      const sessionId = req.sessionID || "guest";

      // التحقق من المنتج والفاريانت وتوفر الكمية
      const product = await Product.findById(productId);
      const variant = await Variant.findById(variantId);

      if (!product || !variant) {
        return res
          .status(404)
          .json({ message: "Product or variant not found" });
      }
      if (variant.quantity < quantity) {
        return res.status(400).json({ message: "Not enough stock available" });
      }

      // إيجاد أو إنشاء السلة
      let cart = await Cart.findOne(userId ? { userId } : { sessionId });
      if (!cart) {
        cart = new Cart({ userId, sessionId, items: [] });
      }

      // إضافة أو تحديث العنصر في السلة
      const existingItemIndex = cart.items.findIndex(
        (item) =>
          item.productId.toString() === productId &&
          item.variantId.toString() === variantId
      );

      if (existingItemIndex > -1) {
        cart.items[existingItemIndex].quantity += quantity;
      } else {
        cart.items.push({ productId, variantId, quantity });
      }

      await cart.save();

      // إرجاع السلة مع البيانات المطلوبة
      cart = await Cart.findById(cart._id)
        .populate("items.productId", "name")
        .populate(
          "items.variantId",
          "color size price overviewPicture quantity"
        );

      res
        .status(200)
        .json({ message: "Item added to cart successfully", cart });
    } catch (error) {
      console.error("Error adding item to cart:", error);
      res
        .status(500)
        .json({ message: "Error adding item to cart", error: error.message });
    }
  },
  
  updateCartItem: async (req, res) => {
    try {
      const { itemId } = req.params;
      const { quantity } = req.body;
      const userId = req.user ? req.user.id : null;
      const sessionId = req.sessionID || "guest";

      let cart = await Cart.findOne(userId ? { userId } : { sessionId });

      if (!cart) {
        return res.status(404).json({ message: "Cart not found" });
      }

      const cartItem = cart.items.id(itemId);
      if (!cartItem) {
        return res.status(404).json({ message: "Cart item not found" });
      }

      const variant = await Variant.findById(cartItem.variantId);
      if (!variant) {
        return res.status(404).json({ message: "Variant not found" });
      }

      if (variant.quantity < quantity) {
        return res.status(400).json({ message: "Not enough stock available" });
      }

      cartItem.quantity = quantity;
      await cart.save();

      cart = await Cart.findById(cart._id)
        .populate("items.productId", "name")
        .populate(
          "items.variantId",
          "color size price overviewPicture quantity"
        );

      res.status(200).json({ message: "Cart item updated successfully", cart });
    } catch (error) {
      console.error("Error updating cart item:", error);
      res
        .status(500)
        .json({ message: "Error updating cart item", error: error.message });
    }
  },

  removeCartItem: async (req, res) => {
    try {
      const { itemId } = req.params;
      const userId = req.user ? req.user.id : null;
      const sessionId = req.sessionID || "guest";

      let cart = await Cart.findOne(userId ? { userId } : { sessionId });

      if (!cart) {
        return res.status(404).json({ message: "Cart not found" });
      }

      cart.items = cart.items.filter((item) => item._id.toString() !== itemId);
      await cart.save();

      // Populate the cart before sending the response
      cart = await Cart.findOne(userId ? { userId } : { sessionId }).populate({
        path: "items.variantId",
        select: "name color size price overviewPicture",
      });

      res
        .status(200)
        .json({ message: "Item removed from cart successfully", cart });
    } catch (error) {
      console.error("Error removing item from cart:", error);
      res.status(500).json({
        message: "Error removing item from cart",
        error: error.message,
      });
    }
  },

  clearCart: async (req, res) => {
    try {
      const userId = req.user ? req.user.id : null;
      const sessionId = req.sessionID || "guest";

      let cart = await Cart.findOne(userId ? { userId } : { sessionId });

      if (!cart) {
        return res.status(404).json({ message: "Cart not found" });
      }

      cart.items = [];
      await cart.save();

      res.status(200).json({ message: "Cart cleared successfully", cart });
    } catch (error) {
      console.error("Error clearing cart:", error);
      res
        .status(500)
        .json({ message: "Error clearing cart", error: error.message });
    }
  },
};

module.exports = CartController;

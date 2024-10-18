const Cart = require("../Models/Cart");
const { Product, Variant } = require("../Models/Product");

const CartController = {
  getCart: async (req, res) => {
    try {
      const userId = req.headers["user-id"] || null;
      const sessionId = req.sessionID;

      let cart = await Cart.findOne(userId ? { userId } : { sessionId })
        .populate({
          path: "items.productId",
          select: "name",
        })
        .populate({
          path: "items.variantId",
          select: "color size overviewPicture price",
        });

      if (!cart) {
        cart = new Cart({
          userId: userId,
          sessionId: userId ? null : sessionId,
          items: [],
        });
        await cart.save();
      } else if (
        userId &&
        (!cart.userId || cart.userId.toString() !== userId)
      ) {
        cart.userId = userId;
        cart.sessionId = null;
        await cart.save();
      }

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
      const userId = req.headers["user-id"] || null;
      const sessionId = req.sessionID;

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

      let cart = await Cart.findOne(userId ? { userId } : { sessionId });
      if (!cart) {
        cart = new Cart({
          userId: userId,
          sessionId: userId ? null : sessionId,
          items: [],
        });
      } else if (
        userId &&
        (!cart.userId || cart.userId.toString() !== userId)
      ) {
        cart.userId = userId;
        cart.sessionId = null;
      }

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
      const sessionId = req.sessionID;

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
      const sessionId = req.sessionID;

      let cart = await Cart.findOne(userId ? { userId } : { sessionId });

      if (!cart) {
        return res.status(404).json({ message: "Cart not found" });
      }

      cart.items = cart.items.filter((item) => item._id.toString() !== itemId);
      await cart.save();

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
    const userId = req.user.id; // استخدم معرف المستخدم من التوكن
    await Cart.findOneAndUpdate({ userId }, { $set: { items: [] } });
    res.status(200).json({ message: "Cart cleared successfully" });
  } catch (error) {
    console.error("Error clearing cart:", error);
    res.status(500).json({ message: "Error clearing cart", error: error.message });
  }
  },
  
  transferGuestCart: async (req, res) => {
    try {
      const userId = req.user.id;
      const sessionId = req.sessionID;

      const guestCart = await Cart.findOne({ sessionId });
      let userCart = await Cart.findOne({ userId });

      if (guestCart) {
        if (!userCart) {
          userCart = new Cart({ userId, items: [] });
        }

        guestCart.items.forEach((guestItem) => {
          const existingItem = userCart.items.find(
            (item) =>
              item.productId.toString() === guestItem.productId.toString() &&
              item.variantId.toString() === guestItem.variantId.toString()
          );

          if (existingItem) {
            existingItem.quantity += guestItem.quantity;
          } else {
            userCart.items.push(guestItem);
          }
        });

        await userCart.save();
        await Cart.deleteOne({ sessionId });

        userCart = await Cart.findOne({ userId })
          .populate("items.productId", "name")
          .populate(
            "items.variantId",
            "color size price overviewPicture quantity"
          );

        res.status(200).json({
          message: "Guest cart transferred successfully",
          cart: userCart,
        });
      } else {
        res.status(200).json({
          message: "No guest cart found",
          cart: userCart || { items: [] },
        });
      }
    } catch (error) {
      console.error("Error transferring guest cart:", error);
      res.status(500).json({
        message: "Error transferring guest cart",
        error: error.message,
      });
    }
  },
  
};

module.exports = CartController;

const User = require("../Models/User");
const { Product, Variant } = require("../Models/Product");

const favoriteController = {
  toggleFavorite: async (req, res) => {
    try {
      const { productId } = req.params;
      const userId = req.user.id;

      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      const favoriteIndex = user.favorites.indexOf(productId);
      if (favoriteIndex > -1) {
        user.favorites.splice(favoriteIndex, 1);
        await user.save();
        return res.json({
          message: "Removed from favorites",
          isFavorite: false,
        });
      } else {
        user.favorites.push(productId);
        await user.save();
        return res.json({ message: "Added to favorites", isFavorite: true });
      }
    } catch (error) {
      console.error("Error toggling favorite:", error);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },

  getFavorites: async (req, res) => {
    try {
      const userId = req.user.id;
      const user = await User.findById(userId).populate({
        path: "favorites",
        match: { approvalStatus: "Approved", isDeleted: false },
      });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Fetch variants for each product separately
      const favoriteProducts = await Promise.all(
        user.favorites
          .filter((product) => product !== null)
          .map(async (product) => {
            const variants = await Variant.find({ productId: product._id });
            return {
              ...product.toObject(),
              variants,
            };
          })
      );

      res.json(favoriteProducts);
    } catch (error) {
      console.error("Error fetching favorites:", error);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },

  removeFavorite: async (req, res) => {
    try {
      const { productId } = req.params;
      const userId = req.user.id;

      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const favoriteIndex = user.favorites.indexOf(productId);
      if (favoriteIndex > -1) {
        user.favorites.splice(favoriteIndex, 1);
        await user.save();
        return res.json({ message: "Removed from favorites" });
      }

      return res
        .status(404)
        .json({ message: "Product not found in favorites" });
    } catch (error) {
      console.error("Error removing favorite:", error);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },
};

module.exports = favoriteController;

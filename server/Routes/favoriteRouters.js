const express = require("express");
const router = express.Router();
const favoriteController = require("../Controllers/favoriteController");
const auth = require("../Middleware/auth");

router.post("/toggle/:productId", auth, favoriteController.toggleFavorite);
router.get("/", auth, favoriteController.getFavorites);
router.delete("/:productId", auth, favoriteController.removeFavorite);

module.exports = router;

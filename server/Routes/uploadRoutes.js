// Routes/uploadRoutes.js
const express = require("express");
const router = express.Router();
const uploadController = require("../Controllers/uploadController");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const cloudinary = require("../Config/cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "second-chance",
    allowed_formats: ["jpg", "jpeg", "png"],
    transformation: [{ width: 1000, height: 1000, crop: "limit" }],
  },
});

const upload = multer({ storage: storage });

// Route for single image upload
router.post("/image", upload.single("image"), uploadController.uploadImage);

// Route for multiple images upload
router.post(
  "/images",
  upload.array("images", 5),
  uploadController.uploadMultipleImages
);

module.exports = router;

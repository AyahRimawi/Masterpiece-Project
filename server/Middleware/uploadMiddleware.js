// Middleware/uploadMiddleware.js
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../Config/cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "second-chance",
    allowed_formats: ["jpg", "jpeg", "png"],
    transformation: [{ width: 1000, height: 1000, crop: "limit" }],
  },
});

// Middleware for single image upload
const uploadSingle = multer({ storage: storage }).single("image");

// Middleware for multiple images upload
const uploadMultiple = multer({ storage: storage }).array("images", 5);

module.exports = {
  uploadSingle,
  uploadMultiple,
};

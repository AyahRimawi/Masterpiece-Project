const mongoose = require("mongoose");

const variantSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  shein_code: { type: String, required: true },
  color: { type: String, required: true },
  size: [{ type: String, required: true }], // تغيير size إلى sizes
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  overviewPicture: { type: String, required: true },
  images: [{ type: String }],
});

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    category: { type: String, required: true },
    subCategory: { type: String },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isUserSubmitted: { type: Boolean, default: true },
    approvalStatus: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
    ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
    averageRating: { type: Number, default: 0 },
    paymentStatus: {
      type: String,
      enum: ["Pending", "Paid"],
      default: "Pending",
    },
    isDeleted: { type: Boolean, default: false },
    isSold: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
const Variant = mongoose.model("Variant", variantSchema);

module.exports = { Product, Variant };
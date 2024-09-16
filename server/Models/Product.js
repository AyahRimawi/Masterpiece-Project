const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  sku: { type: String, unique: true }, // رقم المنتج
  price: { type: Number, required: true },
  sizes: [{ type: String }], // أحجام مختلفة
  colors: [{ type: String }], // ألوان مختلفة
  images: [{ type: String }], // روابط للصور
  quantity: { type: Number, required: true },
  category: {
    type: String,
    enum: ["Women", "Men", "Kids", "Dresses", "Sale"],
    required: true,
  },
  subCategory: {
    type: String,
    enum: [
      "Pants",
      "Dress",
      "Shirt",
      "Skirt",
      "Pajamas",
      "Suit",
      "Evening Dresses",
      "Hijab Dresses",
      "Boy",
      "Girl",
      "Baby",
    ],
  },
  seller: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // البائع
  isUserSubmitted: { type: Boolean, default: false }, // هل المنتج مقدم من قبل المستخدم
  approvalStatus: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending", // الوضع الافتراضي للمنتجات المقدمة من قبل المستخدمين
  },
  adminFeedback: { type: String }, // ملاحظات الإدارة
  ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }], // التقييمات
  averageRating: { type: Number, default: 0 }, // معدل التقييم
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

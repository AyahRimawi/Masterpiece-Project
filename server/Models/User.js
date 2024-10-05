const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: {
    governorate: {
      type: String,
      enum: ["Amman", "Zarqa"],
      required: true,
    },
    details: { type: String, required: true },
  },
  phone: { type: String },

  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }], // قائمة المفضلات
  cart: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number, required: true },
    },
  ],
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }], // قائمة الطلبات

  // بيانات للمستخدمين الذين قدموا منتجات
  submittedProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }], // قائمة المنتجات المقدمة من قبل المستخدم

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

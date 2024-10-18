// // const mongoose = require("mongoose");

// // const orderSchema = new mongoose.Schema({
// //   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
// //   items: [
// //     {
// //       variantId: {
// //         type: mongoose.Schema.Types.ObjectId,
// //         ref: "Variant",
// //         required: true,
// //       },
// //       productId: {
// //         type: mongoose.Schema.Types.ObjectId,
// //         ref: "Product",
// //         required: true,
// //       },
// //       productName: { type: String, required: true }, // معلومات تلقائية
// //       color: { type: String, required: true }, // معلومات تلقائية
// //       // size: { type: String, required: true }, // حجم واحد
// //       size: { type: [String], required: true },
// //       image: { type: String, required: true }, // معلومات تلقائية
// //       price: { type: Number, required: true }, // معلومات تلقائية
// //       quantity: { type: Number, required: true }, // عدد القطع
// //     },
// //   ],
// //   totalAmount: { type: Number, required: true },
// //   status: {
// //     type: String,
// //     enum: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
// //     default: "Pending",
// //   },
// //   paymentMethod: {
// //     type: String,
// //     enum: ["PayPal", "CashOnDelivery"],
// //     required: true,
// //   },
// //   paymentStatus: {
// //     type: String,
// //     enum: ["Pending", "Completed", "Failed"],
// //     default: "Pending",
// //   },
// //   shippingAddress: {
// //     governorate: { type: String, required: true },
// //     details: { type: String, required: true },
// //   },
// //   createdAt: { type: Date, default: Date.now },
// //   updatedAt: { type: Date, default: Date.now },
// // });

// // const Order = mongoose.model("Order", orderSchema);

// // module.exports = Order;



// const mongoose = require("mongoose");

// const orderSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   items: [
//     {
//       productId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Product",
//         required: true,
//       },
//       variantId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Variant",
//         required: true,
//       },
//       quantity: { type: Number, required: true },
//       price: { type: Number, required: true },
//       // سنقوم بإزالة الحقول الأخرى لأنها ستكون متاحة عبر العلاقة مع Variant
//     },
//   ],
//   totalAmount: { type: Number, required: true },
//   status: {
//     type: String,
//     enum: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
//     default: "Pending",
//   },
//   paymentMethod: {
//     type: String,
//     enum: ["PayPal", "CashOnDelivery"],
//     required: true,
//   },
//   paymentStatus: {
//     type: String,
//     enum: ["Pending", "Completed", "Failed"],
//     default: "Pending",
//   },
//   shippingAddress: {
//     governorate: { type: String, required: true },
//     details: { type: String, required: true },
//   },
//   paypalOrderId: { type: String },
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now },
// });

// const Order = mongoose.model("Order", orderSchema);

// module.exports = Order;



// const mongoose = require("mongoose");

// const orderSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   items: [
//     {
//       productId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Product",
//         required: true,
//       },
//       variantId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Variant",
//         required: true,
//       },
//       quantity: { type: Number, required: true },
//       price: { type: Number, required: true },
//     },
//   ],
//   totalAmount: { type: Number, required: true },
//   status: {
//     type: String,
//     enum: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
//     default: "Pending",
//   },
//   paymentMethod: {
//     type: String,
//     enum: ["PayPal", "CashOnDelivery"],
//     required: true,
//   },
//   paymentStatus: {
//     type: String,
//     enum: ["Pending", "Completed", "Failed"],
//     default: "Pending",
//   },
//   shippingAddress: {
//     governorate: { type: String, required: true },
//     details: { type: String, required: true },
//   },
//   paypalOrderId: { type: String },
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now },
// });

// const Order = mongoose.model("Order", orderSchema);

// module.exports = Order;


const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      variantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Variant",
        required: true,
      },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
      productName: { type: String, required: true },
      color: { type: String, required: true },
      size: { type: String, required: true },
      image: { type: String, required: true },
    },
  ],
  totalAmount: { type: Number, required: true },
  paymentMethod: { type: String, required: true },
  paymentStatus: { type: String, required: true },
  shippingAddress: {
    governorate: { type: String, required: true },
    details: { type: String, required: true },
  },
  paypalOrderId: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
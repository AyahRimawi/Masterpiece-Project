// // const mongoose = require("mongoose");

// // const productSchema = new mongoose.Schema({
// //   name: { type: String, required: true },
// //   description: { type: String },
// //   shein_code: { type: String}, // رقم المنتج
// //   price: { type: Number, required: true },
// //   sizes: [{ type: String }], // أحجام مختلفة
// //   colors: [{ type: String }], // ألوان مختلفة
// //   overviewPicture: { type: String, required: true },
// //   images: [{ type: String }], // روابط للصور
// //   quantity: { type: Number, required: true },
// //   category: {
// //     type: String,
// //     enum: ["Women", "Men", "Kids", "Dresses", "Sale"],
// //     required: true,
// //   },
// //   subCategory: {
// //     type: String,
// //     enum: [
// //       "Pants",
// //       "Dress",
// //       "Shirt",
// //       "Skirt",
// //       "Pajamas",
// //       "Suit",
// //       "Evening Dresses",
// //       "Hijab Dresses",
// //       "Boy",
// //       "Girl",
// //       "Baby",
// //     ],
// //   },
// //   seller: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // البائع
// //   isUserSubmitted: { type: Boolean, default: false }, // هل المنتج مقدم من قبل المستخدم
// //   approvalStatus: {
// //     type: String,
// //     enum: ["Pending", "Approved", "Rejected"],
// //     default: "Pending", // الوضع الافتراضي للمنتجات المقدمة من قبل المستخدمين
// //   },
// //   adminFeedback: { type: String }, // ملاحظات الإدارة
// //   ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }], // التقييمات
// //   averageRating: { type: Number, default: 0 }, // معدل التقييم
// //   paymentStatus: {
// //     type: String,
// //     enum: ["Pending", "Paid"],
// //     default: "Pending", // يبدأ كـ 'Pending' حتى يتم تأكيد الدفع
// //   },
// //   isDeleted: { type: Boolean, default: false }, // حقل جديد للحذف الناعم
// //   deletedAt: { type: Date }, // تاريخ الحذف الناعم
// //   createdAt: { type: Date, default: Date.now },
// //   updatedAt: { type: Date, default: Date.now },
// // });

// // const Product = mongoose.model("Product", productSchema);

// // module.exports = Product;





// const mongoose = require("mongoose");

// const variantSchema = new mongoose.Schema({
//   productId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Product",
//     required: true,
//   }, // ربط المتغير بالمنتج

//   shein_code: { type: String, required: true, unique: true }, // رمز SHEIN فريد لكل متغير
//   color: { type: String, required: true }, // لون المتغير
//   size: { type: String, required: true }, // حجم المتغير
//   price: { type: Number, required: true }, // سعر المتغير
//   quantity: { type: Number, required: true }, // كمية المتغير
//   overviewPicture: { type: String, required: true }, // صورة المنتج
//   images: [{ type: String }], // روابط الصور الخاصة بهذا المتغير
// });

// const Variant = mongoose.model("Variant", variantSchema);
// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true }, // اسم المنتج
//   description: { type: String }, // وصف المنتج
//   category: {
//     // فئة المنتج
//     type: String,
//     enum: ["Women", "Men", "Kids", "Dresses", "Sale"],
//     required: true,
//   },

//   subCategory: {
//     // فئة فرعية للمنتج
//     type: String,
//     enum: [
//       "Pants",
//       "Dress",
//       "Shirt",
//       "Skirt",
//       "Pajamas",
//       "Suit",
//       "Evening Dresses",
//       "Hijab Dresses",
//       "Boy",
//       "Girl",
//       "Baby",
//     ],
//   },

//   seller: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // معرف البائع
//   isUserSubmitted: { type: Boolean, default: false }, // ما إذا كان المنتج مقدمًا من قبل المستخدم
//   approvalStatus: {
//     // حالة الموافقة على المنتج
//     type: String,
//     enum: ["Pending", "Approved", "Rejected"],
//     default: "Pending",
//   },
//   adminFeedback: { type: String }, // ملاحظات الإدارة
//   ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }], // تقييمات المنتج
//   averageRating: { type: Number, default: 0 }, // متوسط التقييمات
//   paymentStatus: {
//     // حالة الدفع
//     type: String,
//     enum: ["Pending", "Paid"],
//     default: "Pending",
//   },
//   isDeleted: { type: Boolean, default: false }, // ما إذا كان المنتج محذوفًا
//   deletedAt: { type: Date }, // تاريخ الحذف
//   createdAt: { type: Date, default: Date.now }, // تاريخ الإنشاء
//   updatedAt: { type: Date, default: Date.now }, // تاريخ التحديث
//   isSold: { type: Boolean, default: false }, // ما إذا كان المنتج قد تم بيعه
// });

// const Product = mongoose.model("Product", productSchema);
// module.exports = { Product, Variant };


const mongoose = require("mongoose");

const variantSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  shein_code: { type: String, required: true },
  color: { type: String, required: true },
  size: { type: String, required: true },
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
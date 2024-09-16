const Product = require("../Models/Product");
const User = require("../Models/User"); // افترض أن لدينا نموذج User

//TODOO ------------------------
exports.addProduct = async (req, res) => {
  try {
    const product = new Product({
      ...req.body,
      seller: req.user.id, // استخدام req.user.id بدلاً من req.user._id
      isUserSubmitted: true,
    });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
//* ------------------------

//TODOO ------------------------
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({ isDeleted: false }).populate(
      "seller",
      "name"
    );
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//* ------------------------

//TODOO ------------------------
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({
      _id: req.params.id,
      isDeleted: false,
    }).populate("seller", "name");

    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//* ------------------------

//TODOO ------------------------
exports.getProductsByUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    // التحقق مما إذا كان المستخدم يحاول الوصول إلى منتجاته الخاصة
    const isOwnProducts = userId === req.user.id;

    // إذا كان المستخدم يحاول الوصول إلى منتجات مستخدم آخر، تحقق من أنه مسؤول
    if (!isOwnProducts && req.user.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Not authorized to view these products" });
    }

    const products = await Product.find({
      seller: userId,
      isDeleted: false, // نستثني المنتجات المحذوفة
    }).populate("seller", "name");

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//* ------------------------

//TODOO ------------------------
exports.softDeleteProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      _id: req.params.id,
      isDeleted: false,
    });
    if (!product) return res.status(404).json({ message: "Product not found" });

    // التحقق من أن المستخدم هو مالك المنتج
    if (product.seller.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ message: "User not authorized to delete this product" });
    }

    product.isDeleted = true;
    product.deletedAt = new Date();
    await product.save();

    res.json({ message: "Product soft deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//* ------------------------

//TODOO ------------------------
exports.restoreProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      _id: req.params.id,
      isDeleted: true,
    });
    if (!product)
      return res.status(404).json({ message: "Deleted product not found" });

    // التحقق من أن المستخدم هو مالك المنتج
    if (product.seller.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ message: "User not authorized to restore this product" });
    }

    product.isDeleted = false;
    product.deletedAt = undefined;
    await product.save();

    res.json({ message: "Product restored successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//* ------------------------

//TODOO ------------------------
exports.updateProduct = async (req, res) => {
  try {
    let product = await Product.findOne({
      _id: req.params.id,
      isDeleted: false,
    });
    if (!product) return res.status(404).json({ message: "Product not found" });

    // التحقق من أن المستخدم هو مالك المنتج
    if (product.seller.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ message: "User not authorized to update this product" });
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
//* ------------------------

//TODOO ------------------------
exports.getProductsByCategory = async (req, res) => {
  try {
     const products = await Product.find({
       category: req.params.category,
       isDeleted: false,
     }).populate("seller", "name");
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//* ------------------------

//TODOO ------------------------
exports.getProductsBySubCategory = async (req, res) => {
  try {
    const products = await Product.find({
      subCategory: req.params.subCategory,
      isDeleted: false,
    }).populate("seller", "name");
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//* ------------------------


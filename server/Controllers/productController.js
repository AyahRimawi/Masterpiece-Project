const mongoose = require("mongoose");
const { Product, Variant } = require("../Models/Product");
const User = require("../Models/User");

//todoo --------------- getAllProducts ---------------------
// exports.getAllProducts = async (req, res) => {
//   try {
//     const products = await Product.find({ isDeleted: false }).populate(
//       "seller",
//       "name"
//     );

//     const productsWithRandomVariant = await Promise.all(
//       products.map(async (product) => {
//         const variants = await Variant.find({ productId: product._id });
//         const randomVariant =
//           variants[Math.floor(Math.random() * variants.length)];
//         return {
//           ...product.toObject(),
//           randomVariant: randomVariant,
//           availableColors: [...new Set(variants.map((v) => v.color))],
//         };
//       })
//     );

//     res.json(productsWithRandomVariant);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

exports.getAllProducts = async (req, res) => {
  try {
    // تعديل الاستعلام ليستثني المنتجات المباعة والمحذوفة
    const products = await Product.find({
      isDeleted: false,
      isSold: false,
    }).populate("seller", "name");

    const productsWithRandomVariant = await Promise.all(
      products.map(async (product) => {
        // البحث عن المتغيرات التي لديها كمية أكبر من صفر فقط
        const variants = await Variant.find({
          productId: product._id,
          quantity: { $gt: 0 },
        });

        // إذا لم يكن هناك متغيرات متاحة، تخطي هذا المنتج
        if (variants.length === 0) {
          return null;
        }

        const randomVariant =
          variants[Math.floor(Math.random() * variants.length)];
        return {
          ...product.toObject(),
          randomVariant: randomVariant,
          availableColors: [...new Set(variants.map((v) => v.color))],
        };
      })
    );

    // تصفية المنتجات التي ليس لديها متغيرات متاحة
    const filteredProducts = productsWithRandomVariant.filter(
      (product) => product !== null
    );

    res.json(filteredProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//todoo ----------------- getProductById -------------------

// exports.getProductById = async (req, res) => {
//   try {
//     const product = await Product.findOne({
//       _id: req.params.id,
//       isDeleted: false,
//     }).populate("seller", "name");

//     if (!product) return res.status(404).json({ message: "Product not found" });

//     const variants = await Variant.find({ productId: product._id });

//     res.json({
//       ...product.toObject(),
//       variants: variants,
//       availableColors: [...new Set(variants.map((v) => v.color))],
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({
      _id: req.params.id,
      isDeleted: false,
      isSold: false,
    }).populate("seller", "name");

    if (!product) return res.status(404).json({ message: "Product not found" });

    // البحث عن المتغيرات المتاحة فقط
    const variants = await Variant.find({
      productId: product._id,
      quantity: { $gt: 0 },
    });

    res.json({
      ...product.toObject(),
      variants: variants,
      availableColors: [...new Set(variants.map((v) => v.color))],
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//todoo ------------------- getVariantById -----------------

exports.getVariantById = async (req, res) => {
  try {
    const variantId = req.params.id;
    const variant = await Variant.findById(variantId);

    if (!variant) {
      return res.status(404).json({ message: "Variant not found" });
    }

    const product = await Product.findById(variant.productId).populate(
      "seller",
      "name"
    );

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const allVariants = await Variant.find({ productId: product._id });

    // Gather available colors and sizes
    const availableColors = [...new Set(allVariants.map((v) => v.color))];
    const sizesForCurrentColor = allVariants
      .filter((v) => v.color === variant.color)
      .flatMap((v) => v.size);

    const response = {
      ...product.toObject(),
      currentVariant: variant,
      variants: allVariants,
      availableColors: availableColors,
      availableSizes: [...new Set(sizesForCurrentColor)],
    };

    res.json(response);
  } catch (error) {
    console.error("Error fetching variant details:", error);
    res.status(500).json({ message: error.message });
  }
};
//todoo ---------------- getSizesForColor --------------------

// Add this new function to get available sizes for the selected color
exports.getSizesForColor = async (req, res) => {
  try {
    const { productId, color } = req.params;
    const variants = await Variant.find({ productId, color });

    if (!variants || variants.length === 0) {
      return res
        .status(404)
        .json({ message: "No variants found for this color" });
    }

    const availableSizes = [...new Set(variants.flatMap((v) => v.size))];
    res.json({ availableSizes });
  } catch (error) {
    console.error("Error fetching available sizes:", error);
    res.status(500).json({ message: error.message });
  }
};
//todoo ---------------- getProductsByUser --------------------

exports.getProductsByUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const isOwnProducts = userId === req.user.id;

    if (!isOwnProducts && req.user.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Not authorized to view these products" });
    }

    const products = await Product.find({
      seller: userId,
      isDeleted: false,
    }).populate("seller", "name");

    const productsWithVariants = await Promise.all(
      products.map(async (product) => {
        const variants = await Variant.find({ productId: product._id });
        return {
          ...product.toObject(),
          variants: variants,
          availableColors: [...new Set(variants.map((v) => v.color))],
        };
      })
    );

    res.json(productsWithVariants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//todoo ----------------- softDeleteProduct -------------------

exports.softDeleteProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      _id: req.params.id,
      isDeleted: false,
    });
    if (!product) return res.status(404).json({ message: "Product not found" });

    if (product.seller.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ message: "User not authorized to delete this product" });
    }

    product.isDeleted = true;
    product.deletedAt = new Date();
    await product.save();

    // Also mark all variants as deleted
    await Variant.updateMany(
      { productId: product._id },
      { isDeleted: true, deletedAt: new Date() }
    );

    res.json({ message: "Product and its variants soft deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//todoo ------------------ restoreProduct ------------------

exports.restoreProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      _id: req.params.id,
      isDeleted: true,
    });
    if (!product)
      return res.status(404).json({ message: "Deleted product not found" });

    if (product.seller.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ message: "User not authorized to restore this product" });
    }

    product.isDeleted = false;
    product.deletedAt = undefined;
    await product.save();

    // Also restore all variants
    await Variant.updateMany(
      { productId: product._id },
      { isDeleted: false, deletedAt: undefined }
    );

    res.json({ message: "Product and its variants restored successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//todoo ----------------- updateProduct -------------------

exports.updateProduct = async (req, res) => {
  try {
    let product = await Product.findOne({
      _id: req.params.id,
      isDeleted: false,
    });
    if (!product) return res.status(404).json({ message: "Product not found" });

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
//todoo ----------------- updateVariant -------------------

exports.updateVariant = async (req, res) => {
  try {
    let variant = await Variant.findById(req.params.variantId);
    if (!variant) return res.status(404).json({ message: "Variant not found" });

    const product = await Product.findById(variant.productId);
    if (product.seller.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ message: "User not authorized to update this variant" });
    }

    variant = await Variant.findByIdAndUpdate(req.params.variantId, req.body, {
      new: true,
    });
    res.json(variant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
//todoo --------------- getProductsByCategory ---------------------

exports.getProductsByCategory = async (req, res) => {
  try {
    // console.log(`Fetching products for category: ${req.params.category}`);

    const products = await Product.find({
      category: req.params.category,
      isDeleted: false,
    }).populate("seller", "name");

    // console.log(
      // `Found ${products.length} products for category ${req.params.category}`
    // );

    const productsWithVariants = await Promise.all(
      products.map(async (product) => {
        const variants = await Variant.find({ productId: product._id });
        // console.log(`Product ${product._id} has ${variants.length} variants`);

        return {
          ...product.toObject(),
          variants: variants,
          randomVariant:
            variants.length > 0
              ? variants[Math.floor(Math.random() * variants.length)]
              : null,
          availableColors: [...new Set(variants.map((v) => v.color))],
        };
      })
    );

    // console.log(
    //   `Returning ${productsWithVariants.length} products with variants`
    // );
    res.json(productsWithVariants);
  } catch (error) {
    console.error("Error in getProductsByCategory:", error);
    res.status(500).json({ message: error.message });
  }
};
//todoo ----------------- getProductsBySubCategory -------------------
exports.getProductsBySubCategory = async (req, res) => {
  try {
    // console.log(`Fetching products for subcategory: ${req.params.subCategory}`);

    const products = await Product.find({
      subCategory: req.params.subCategory,
      isDeleted: false,
    }).populate("seller", "name");

    // console.log(
    //   `Found ${products.length} products for subcategory ${req.params.subCategory}`
    // );

    const productsWithVariants = await Promise.all(
      products.map(async (product) => {
        const variants = await Variant.find({ productId: product._id });
        // console.log(`Product ${product._id} has ${variants.length} variants`);

        return {
          ...product.toObject(),
          variants: variants,
          randomVariant:
            variants.length > 0
              ? variants[Math.floor(Math.random() * variants.length)]
              : null,
          availableColors: [...new Set(variants.map((v) => v.color))],
        };
      })
    );

    // console.log(
    //   `Returning ${productsWithVariants.length} products with variants for subcategory ${req.params.subCategory}`
    // );
    res.json(productsWithVariants);
  } catch (error) {
    console.error("Error in getProductsBySubCategory:", error);
    res.status(500).json({ message: error.message });
  }
};

//todoo ------------------ getProductsByCategoryAndSubCategory ------------------
// exports.getProductsByCategoryAndSubCategory = async (req, res) => {
//   try {
//     const { category, subCategory } = req.params;
//     // console.log(
//     //   `Fetching products for category: ${category} and subcategory: ${subCategory}`
//     // );

//     let query = { category, isDeleted: false };
//     if (subCategory !== "all") {
//       query.subCategory = subCategory;
//     }

//     const products = await Product.find(query).populate("seller", "name");

//     // console.log(
//     //   `Found ${products.length} products for category ${category} and subcategory ${subCategory}`
//     // );

//     const productsWithVariants = await Promise.all(
//       products.map(async (product) => {
//         const variants = await Variant.find({ productId: product._id });
//         // console.log(`Product ${product._id} has ${variants.length} variants`);

//         return {
//           ...product.toObject(),
//           variants: variants,
//           randomVariant:
//             variants.length > 0
//               ? variants[Math.floor(Math.random() * variants.length)]
//               : null,
//           availableColors: [...new Set(variants.map((v) => v.color))],
//         };
//       })
//     );

//     // console.log(
//     //   `Returning ${productsWithVariants.length} products with variants`
//     // );
//     res.json(productsWithVariants);
//   } catch (error) {
//     console.error("Error in getProductsByCategoryAndSubCategory:", error);
//     res.status(500).json({ message: error.message });
//   }
// };

exports.getProductsByCategoryAndSubCategory = async (req, res) => {
  try {
    const { category, subCategory } = req.params;

    let query = {
      category,
      isDeleted: false,
      isSold: false, // لا نريد المنتجات المباعة
    };

    if (subCategory !== "all") {
      query.subCategory = subCategory;
    }

    const products = await Product.find(query).populate("seller", "name");

    const productsWithAvailableVariants = await Promise.all(
      products.map(async (product) => {
        // البحث عن المتغيرات المتوفرة فقط
        const variants = await Variant.find({
          productId: product._id,
          quantity: { $gt: 0 }, // فقط المتغيرات التي لديها كمية متوفرة
        });

        // إذا لم يكن هناك متغيرات متوفرة، نرجع null
        if (variants.length === 0) {
          return null;
        }

        return {
          ...product.toObject(),
          variants: variants,
          randomVariant: variants[Math.floor(Math.random() * variants.length)],
          availableColors: [...new Set(variants.map((v) => v.color))],
          totalAvailableQuantity: variants.reduce(
            (sum, variant) => sum + variant.quantity,
            0
          ),
        };
      })
    );

    // تصفية المنتجات التي ليس لديها متغيرات متوفرة
    const availableProducts = productsWithAvailableVariants.filter(
      (product) => product !== null
    );

    res.json(availableProducts);
  } catch (error) {
    console.error("Error in getProductsByCategoryAndSubCategory:", error);
    res.status(500).json({ message: error.message });
  }
};

//todoo --------------- addProduct ---------------------
// exports.addProduct = async (req, res) => {
//   const session = await mongoose.startSession();
//   session.startTransaction();

//   try {
//     const { name, description, category, subCategory, variants } = req.body;

//     const product = new Product({
//       name,
//       description,
//       category,
//       subCategory,
//       seller: req.user.id,
//       isUserSubmitted: true,
//       approvalStatus: "Pending",
//       paymentStatus: "Pending",
//     });

//     await product.save({ session });

//     if (variants && Array.isArray(variants)) {
//       const variantsToAdd = variants.map((variant) => ({
//         productId: product._id,
//         shein_code: variant.shein_code,
//         color: variant.color,
//         size: variant.size,
//         price: variant.price,
//         quantity: variant.quantity,
//         overviewPicture: variant.overviewPicture,
//         images: variant.images || [],
//       }));

//       await Variant.insertMany(variantsToAdd, { session });
//     }

//     // إضافة المنتج إلى قائمة منتجات المستخدم
//     await User.findByIdAndUpdate(
//       req.user.id,
//       { $push: { submittedProducts: product._id } },
//       { session }
//     );

//     await session.commitTransaction();
//     session.endSession();

//     res.status(201).json({
//       success: true,
//       message: "Product submitted successfully and awaiting approval",
//       product,
//     });
//   } catch (error) {
//     await session.abortTransaction();
//     session.endSession();
//     res.status(500).json({
//       success: false,
//       message: "Error submitting product",
//       error: error.message,
//     });
//   }
// };


exports.addProduct = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    console.log("Received product data:", req.body); // Debug log

    const { name, description, category, subCategory, variants } = req.body;

    // Validate required fields
    if (
      !name ||
      !category ||
      !subCategory ||
      !variants ||
      variants.length === 0
    ) {
      throw new Error("Missing required fields");
    }

    // Create the product
    const product = new Product({
      name,
      description,
      category,
      subCategory,
      seller: req.user.id,
      isUserSubmitted: true,
      approvalStatus: "Pending",
      paymentStatus: "Pending",
    });

    await product.save({ session });

    // Create variants
    if (variants && Array.isArray(variants)) {
      const variantsToAdd = variants.map((variant) => ({
        productId: product._id,
        shein_code: variant.shein_code,
        color: variant.color,
        size: variant.size,
        price: variant.price,
        quantity: variant.quantity,
        overviewPicture: variant.overviewPicture,
        images: variant.images || [],
      }));

      await Variant.insertMany(variantsToAdd, { session });
    }

    // Add product to user's submitted products
    await User.findByIdAndUpdate(
      req.user.id,
      { $push: { submittedProducts: product._id } },
      { session }
    );

    await session.commitTransaction();
    session.endSession();

    res.status(201).json({
      success: true,
      message: "Product submitted successfully and awaiting approval",
      product,
    });
  } catch (error) {
    console.error("Server error:", error); // Debug log
    await session.abortTransaction();
    session.endSession();
    res.status(500).json({
      success: false,
      message: "Error submitting product",
      error: error.message,
    });
  }
};
//todoo ------------------ getUserProducts ------------------

exports.getUserProducts = async (req, res) => {
  try {
    const products = await Product.find({
      seller: req.user.id,
    }).populate("seller", "name");

    const productsWithDetails = await Promise.all(
      products.map(async (product) => {
        const variants = await Variant.find({ productId: product._id });
        return {
          ...product.toObject(),
          variants,
          totalVariants: variants.length,
          status: {
            isPending: product.approvalStatus === "Pending",
            isApproved: product.approvalStatus === "Approved",
            isSold: product.isSold,
          },
        };
      })
    );

    const categorizedProducts = {
      pending: productsWithDetails.filter((p) => p.status.isPending),
      active: productsWithDetails.filter(
        (p) => p.status.isApproved && !p.status.isSold
      ),
      sold: productsWithDetails.filter((p) => p.status.isSold),
    };

    res.json({
      success: true,
      products: categorizedProducts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching user products",
      error: error.message,
    });
  }
};
//todoo --------------- searchProducts ---------------------
exports.searchProducts = async (req, res) => {
  try {
    const { term } = req.query;

    if (!term) {
      return res.json([]);
    }

    // البحث عن المنتجات باستخدام regex
    const products = await Product.find({
      name: { $regex: term, $options: 'i' },
      isDeleted: false
    }).populate('seller', 'name');

    const productsWithRandomVariant = await Promise.all(
      products.map(async (product) => {
        const variants = await Variant.find({ productId: product._id });
        const randomVariant = variants[Math.floor(Math.random() * variants.length)];
        return {
          ...product.toObject(),
          randomVariant: randomVariant,
          availableColors: [...new Set(variants.map((v) => v.color))],
        };
      })
    );

    res.json(productsWithRandomVariant);
  } catch (error) {
    console.error('Error searching products:', error);
    res.status(500).json({ message: error.message });
  }
};
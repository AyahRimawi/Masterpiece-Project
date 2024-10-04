// const Product = require("../Models/Product");
// const User = require("../Models/User"); // افترض أن لدينا نموذج User

// //TODOO ------------------------
// exports.addProduct = async (req, res) => {
//   try {
//     const product = new Product({
//       ...req.body,
//       seller: req.user.id, // استخدام req.user.id بدلاً من req.user._id
//       isUserSubmitted: true,
//     });
//     await product.save();
//     res.status(201).json(product);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };
// //* ------------------------

// //TODOO ------------------------
// exports.getAllProducts = async (req, res) => {
//   try {
//     const products = await Product.find({ isDeleted: false }).populate(
//       "seller",
//       "name"
//     );
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
// //* ------------------------

// //TODOO ------------------------
// exports.getProductById = async (req, res) => {
//   try {
//     const product = await Product.findOne({
//       _id: req.params.id,
//       isDeleted: false,
//     }).populate("seller", "name");

//     if (!product) return res.status(404).json({ message: "Product not found" });
//     res.json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
// //* ------------------------

// //TODOO ------------------------
// exports.getProductsByUser = async (req, res) => {
//   try {
//     const userId = req.params.userId;

//     // التحقق مما إذا كان المستخدم يحاول الوصول إلى منتجاته الخاصة
//     const isOwnProducts = userId === req.user.id;

//     // إذا كان المستخدم يحاول الوصول إلى منتجات مستخدم آخر، تحقق من أنه مسؤول
//     if (!isOwnProducts && req.user.role !== "admin") {
//       return res
//         .status(403)
//         .json({ message: "Not authorized to view these products" });
//     }

//     const products = await Product.find({
//       seller: userId,
//       isDeleted: false, // نستثني المنتجات المحذوفة
//     }).populate("seller", "name");

//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
// //* ------------------------

// //TODOO ------------------------
// exports.softDeleteProduct = async (req, res) => {
//   try {
//     const product = await Product.findOne({
//       _id: req.params.id,
//       isDeleted: false,
//     });
//     if (!product) return res.status(404).json({ message: "Product not found" });

//     // التحقق من أن المستخدم هو مالك المنتج
//     if (product.seller.toString() !== req.user.id) {
//       return res
//         .status(403)
//         .json({ message: "User not authorized to delete this product" });
//     }

//     product.isDeleted = true;
//     product.deletedAt = new Date();
//     await product.save();

//     res.json({ message: "Product soft deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
// //* ------------------------

// //TODOO ------------------------
// exports.restoreProduct = async (req, res) => {
//   try {
//     const product = await Product.findOne({
//       _id: req.params.id,
//       isDeleted: true,
//     });
//     if (!product)
//       return res.status(404).json({ message: "Deleted product not found" });

//     // التحقق من أن المستخدم هو مالك المنتج
//     if (product.seller.toString() !== req.user.id) {
//       return res
//         .status(403)
//         .json({ message: "User not authorized to restore this product" });
//     }

//     product.isDeleted = false;
//     product.deletedAt = undefined;
//     await product.save();

//     res.json({ message: "Product restored successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
// //* ------------------------

// //TODOO ------------------------
// exports.updateProduct = async (req, res) => {
//   try {
//     let product = await Product.findOne({
//       _id: req.params.id,
//       isDeleted: false,
//     });
//     if (!product) return res.status(404).json({ message: "Product not found" });

//     // التحقق من أن المستخدم هو مالك المنتج
//     if (product.seller.toString() !== req.user.id) {
//       return res
//         .status(403)
//         .json({ message: "User not authorized to update this product" });
//     }

//     product = await Product.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     res.json(product);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };
// //* ------------------------

// //TODOO ------------------------
// exports.getProductsByCategory = async (req, res) => {
//   try {
//      const products = await Product.find({
//        category: req.params.category,
//        isDeleted: false,
//      }).populate("seller", "name");
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
// //* ------------------------

// //TODOO ------------------------
// exports.getProductsBySubCategory = async (req, res) => {
//   try {
//     const products = await Product.find({
//       subCategory: req.params.subCategory,
//       isDeleted: false,
//     }).populate("seller", "name");
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
// //* ------------------------

const mongoose = require("mongoose");
const { Product, Variant } = require("../Models/Product");
const User = require("../Models/User");

// exports.addProduct = async (req, res) => {
//   try {
//     const product = new Product({
//       name: req.body.name,
//       description: req.body.description,
//       category: req.body.category,
//       subCategory: req.body.subCategory,
//       seller: req.user.id,
//       isUserSubmitted: true,
//     });
//     await product.save();
//     res.status(201).json(product);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// exports.addVariant = async (req, res) => {
//   try {
//     const variant = new Variant({
//       productId: req.params.productId,
//       shein_code: req.body.shein_code,
//       color: req.body.color,
//       size: req.body.size,
//       price: req.body.price,
//       quantity: req.body.quantity,
//       overviewPicture: req.body.overviewPicture,
//       images: req.body.images,
//     });
//     await variant.save();
//     res.status(201).json(variant);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

exports.addProduct = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    console.log("Adding new product:", req.body);

    const product = new Product({
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      subCategory: req.body.subCategory,
      seller: req.user.id,
      isUserSubmitted: true,
    });

    await product.save({ session });
    console.log("Product saved:", product);

    if (req.body.variants && Array.isArray(req.body.variants)) {
      const variants = req.body.variants.map((variant) => ({
        productId: product._id,
        shein_code: variant.shein_code,
        color: variant.color,
        size: variant.size,
        price: variant.price,
        quantity: variant.quantity,
        overviewPicture: variant.overviewPicture,
        images: variant.images,
      }));

      const savedVariants = await Variant.insertMany(variants, { session });
      console.log("Variants saved:", savedVariants);
    }

    await session.commitTransaction();
    session.endSession();

    res
      .status(201)
      .json({ message: "Product and variants added successfully", product });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.error("Error adding product:", error);
    res.status(400).json({ message: error.message });
  }
};


exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({ isDeleted: false }).populate(
      "seller",
      "name"
    );

    const productsWithRandomVariant = await Promise.all(
      products.map(async (product) => {
        const variants = await Variant.find({ productId: product._id });
        const randomVariant =
          variants[Math.floor(Math.random() * variants.length)];
        return {
          ...product.toObject(),
          randomVariant: randomVariant,
          availableColors: [...new Set(variants.map((v) => v.color))],
        };
      })
    );

    res.json(productsWithRandomVariant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({
      _id: req.params.id,
      isDeleted: false,
    }).populate("seller", "name");

    if (!product) return res.status(404).json({ message: "Product not found" });

    const variants = await Variant.find({ productId: product._id });

    res.json({
      ...product.toObject(),
      variants: variants,
      availableColors: [...new Set(variants.map((v) => v.color))],
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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

// exports.getProductsByCategory = async (req, res) => {
//   try {
//     const products = await Product.find({
//       category: req.params.category,
//       isDeleted: false,
//     }).populate("seller", "name");

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

// exports.getProductsBySubCategory = async (req, res) => {
//   try {
//     const products = await Product.find({
//       subCategory: req.params.subCategory,
//       isDeleted: false,
//     }).populate("seller", "name");

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

exports.getProductsByCategory = async (req, res) => {
  try {
    console.log(`Fetching products for category: ${req.params.category}`);

    const products = await Product.find({
      category: req.params.category,
      isDeleted: false,
    }).populate("seller", "name");

    console.log(
      `Found ${products.length} products for category ${req.params.category}`
    );

    const productsWithVariants = await Promise.all(
      products.map(async (product) => {
        const variants = await Variant.find({ productId: product._id });
        console.log(`Product ${product._id} has ${variants.length} variants`);

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

    console.log(
      `Returning ${productsWithVariants.length} products with variants`
    );
    res.json(productsWithVariants);
  } catch (error) {
    console.error("Error in getProductsByCategory:", error);
    res.status(500).json({ message: error.message });
  }
};
exports.getProductsBySubCategory = async (req, res) => {
  try {
    console.log(`Fetching products for subcategory: ${req.params.subCategory}`);

    const products = await Product.find({
      subCategory: req.params.subCategory,
      isDeleted: false,
    }).populate("seller", "name");

    console.log(
      `Found ${products.length} products for subcategory ${req.params.subCategory}`
    );

    const productsWithVariants = await Promise.all(
      products.map(async (product) => {
        const variants = await Variant.find({ productId: product._id });
        console.log(`Product ${product._id} has ${variants.length} variants`);

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

    console.log(
      `Returning ${productsWithVariants.length} products with variants for subcategory ${req.params.subCategory}`
    );
    res.json(productsWithVariants);
  } catch (error) {
    console.error("Error in getProductsBySubCategory:", error);
    res.status(500).json({ message: error.message });
  }
};


exports.getProductsByCategoryAndSubCategory = async (req, res) => {
  try {
    const { category, subCategory } = req.params;
    console.log(
      `Fetching products for category: ${category} and subcategory: ${subCategory}`
    );

    let query = { category, isDeleted: false };
    if (subCategory !== "all") {
      query.subCategory = subCategory;
    }

    const products = await Product.find(query).populate("seller", "name");

    console.log(
      `Found ${products.length} products for category ${category} and subcategory ${subCategory}`
    );

    const productsWithVariants = await Promise.all(
      products.map(async (product) => {
        const variants = await Variant.find({ productId: product._id });
        console.log(`Product ${product._id} has ${variants.length} variants`);

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

    console.log(
      `Returning ${productsWithVariants.length} products with variants`
    );
    res.json(productsWithVariants);
  } catch (error) {
    console.error("Error in getProductsByCategoryAndSubCategory:", error);
    res.status(500).json({ message: error.message });
  }
};
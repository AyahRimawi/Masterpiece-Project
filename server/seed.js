
// const mongoose = require("mongoose");
// const connectDB = require("./Config/db");
// const { Product, Variant } = require("./Models/Product");

// const sampleData = {
//   products: [
//     {
//       name: "Classic Jeans",
//       description: "Stylish classic jeans for everyday wear.",
//       category: "Women",
//       subCategory: "Pants",
//       seller: null,
//       isUserSubmitted: false,
//       approvalStatus: "Approved",
//       adminFeedback: null,
//       ratings: [],
//       averageRating: 0,
//       paymentStatus: "Paid",
//       isDeleted: false,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     },
//     {
//       name: "Summer Floral Dress",
//       description: "A breezy dress perfect for summer outings.",
//       category: "Women",
//       subCategory: "Dress",
//       seller: null,
//       isUserSubmitted: false,
//       approvalStatus: "Approved",
//       adminFeedback: null,
//       ratings: [],
//       averageRating: 0,
//       paymentStatus: "Paid",
//       isDeleted: false,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     },
//     {
//       name: "Casual Button-up Shirt",
//       description: "A versatile shirt for casual and formal occasions.",
//       category: "Women",
//       subCategory: "Shirt",
//       seller: null,
//       isUserSubmitted: false,
//       approvalStatus: "Approved",
//       adminFeedback: null,
//       ratings: [],
//       averageRating: 0,
//       paymentStatus: "Paid",
//       isDeleted: false,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     },
//     {
//       name: "A-Line Skirt",
//       description: "Elegant A-line skirt suitable for all occasions.",
//       category: "Women",
//       subCategory: "Skirt",
//       seller: null,
//       isUserSubmitted: false,
//       approvalStatus: "Approved",
//       adminFeedback: null,
//       ratings: [],
//       averageRating: 0,
//       paymentStatus: "Paid",
//       isDeleted: false,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     },
//     {
//       name: "Cotton Pajama Set",
//       description: "Soft and cozy pajamas for a good night's sleep.",
//       category: "Women",
//       subCategory: "Pajamas",
//       seller: null,
//       isUserSubmitted: false,
//       approvalStatus: "Approved",
//       adminFeedback: null,
//       ratings: [],
//       averageRating: 0,
//       paymentStatus: "Paid",
//       isDeleted: false,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     },
//   ],
//   variants: [
//     {
//       shein_code: "PJ001-S",
//       size: "S",
//       color: "Blue",
//       price: 39.99,
//       quantity: 10,
//       overviewPicture: "https://example.com/images/classic_jeans_s.jpg",
//       images: ["https://example.com/images/classic_jeans_s_1.jpg"],
//     },
//     {
//       shein_code: "PJ001-M",
//       size: "M",
//       color: "Blue",
//       price: 39.99,
//       quantity: 15,
//       overviewPicture: "https://example.com/images/classic_jeans_m.jpg",
//       images: ["https://example.com/images/classic_jeans_m_1.jpg"],
//     },
//     {
//       shein_code: "PJ001-L",
//       size: "L",
//       color: "Blue",
//       price: 39.99,
//       quantity: 25,
//       overviewPicture: "https://example.com/images/classic_jeans_l.jpg",
//       images: ["https://example.com/images/classic_jeans_l_1.jpg"],
//     },
//     {
//       shein_code: "DR001-S",
//       size: "S",
//       color: "Pink",
//       price: 49.99,
//       quantity: 5,
//       overviewPicture: "https://example.com/images/summer_floral_dress_s.jpg",
//       images: ["https://example.com/images/summer_floral_dress_s_1.jpg"],
//     },
//     {
//       shein_code: "DR001-M",
//       size: "M",
//       color: "Pink",
//       price: 49.99,
//       quantity: 10,
//       overviewPicture: "https://example.com/images/summer_floral_dress_m.jpg",
//       images: ["https://example.com/images/summer_floral_dress_m_1.jpg"],
//     },
//     {
//       shein_code: "DR001-L",
//       size: "L",
//       color: "Green",
//       price: 49.99,
//       quantity: 5,
//       overviewPicture: "https://example.com/images/summer_floral_dress_l.jpg",
//       images: ["https://example.com/images/summer_floral_dress_l_1.jpg"],
//     },
//     {
//       shein_code: "SH001-S",
//       size: "S",
//       color: "White",
//       price: 29.99,
//       quantity: 20,
//       overviewPicture: "https://example.com/images/button_up_shirt_s.jpg",
//       images: ["https://example.com/images/button_up_shirt_s_1.jpg"],
//     },
//     {
//       shein_code: "SH001-M",
//       size: "M",
//       color: "Light Blue",
//       price: 29.99,
//       quantity: 15,
//       overviewPicture: "https://example.com/images/button_up_shirt_m.jpg",
//       images: ["https://example.com/images/button_up_shirt_m_1.jpg"],
//     },
//     {
//       shein_code: "SH001-L",
//       size: "L",
//       color: "Light Blue",
//       price: 29.99,
//       quantity: 10,
//       overviewPicture: "https://example.com/images/button_up_shirt_l.jpg",
//       images: ["https://example.com/images/button_up_shirt_l_1.jpg"],
//     },
//     {
//       shein_code: "SK001-S",
//       size: "S",
//       color: "Black",
//       price: 34.99,
//       quantity: 8,
//       overviewPicture: "https://example.com/images/a_line_skirt_s.jpg",
//       images: ["https://example.com/images/a_line_skirt_s_1.jpg"],
//     },
//     {
//       shein_code: "SK001-M",
//       size: "M",
//       color: "Black",
//       price: 34.99,
//       quantity: 6,
//       overviewPicture: "https://example.com/images/a_line_skirt_m.jpg",
//       images: ["https://example.com/images/a_line_skirt_m_1.jpg"],
//     },
//     {
//       shein_code: "SK001-L",
//       size: "L",
//       color: "Black",
//       price: 34.99,
//       quantity: 4,
//       overviewPicture: "https://example.com/images/a_line_skirt_l.jpg",
//       images: ["https://example.com/images/a_line_skirt_l_1.jpg"],
//     },
//     {
//       shein_code: "PJ002-S",
//       size: "S",
//       color: "Gray",
//       price: 39.99,
//       quantity: 12,
//       overviewPicture: "https://example.com/images/cotton_pajamas_s.jpg",
//       images: ["https://example.com/images/cotton_pajamas_s_1.jpg"],
//     },
//     {
//       shein_code: "PJ002-M",
//       size: "M",
//       color: "Gray",
//       price: 39.99,
//       quantity: 10,
//       overviewPicture: "https://example.com/images/cotton_pajamas_m.jpg",
//       images: ["https://example.com/images/cotton_pajamas_m_1.jpg"],
//     },
//     {
//       shein_code: "PJ002-L",
//       size: "L",
//       color: "Gray",
//       price: 39.99,
//       quantity: 8,
//       overviewPicture: "https://example.com/images/cotton_pajamas_l.jpg",
//       images: ["https://example.com/images/cotton_pajamas_l_1.jpg"],
//     },
//     {
//       shein_code: "PJ003-S",
//       size: "S",
//       color: "Navy",
//       price: 45.99,
//       quantity: 7,
//       overviewPicture: "https://example.com/images/navy_pajamas_s.jpg",
//       images: ["https://example.com/images/navy_pajamas_s_1.jpg"],
//     },
//     {
//       shein_code: "PJ003-M",
//       size: "M",
//       color: "Navy",
//       price: 45.99,
//       quantity: 5,
//       overviewPicture: "https://example.com/images/navy_pajamas_m.jpg",
//       images: ["https://example.com/images/navy_pajamas_m_1.jpg"],
//     },
//     {
//       shein_code: "PJ003-L",
//       size: "L",
//       color: "Navy",
//       price: 45.99,
//       quantity: 3,
//       overviewPicture: "https://example.com/images/navy_pajamas_l.jpg",
//       images: ["https://example.com/images/navy_pajamas_l_1.jpg"],
//     },
//   ],
// };

// const seedProducts = async () => {
//   await connectDB();

//   try {
//     await Product.deleteMany({});
//     await Variant.deleteMany({});
//     console.log("Existing products and variants deleted!");

//     for (let product of sampleData.products) {
//       const newProduct = new Product(product);
//       await newProduct.save();

//       // البحث عن المتغيرات المرتبطة بهذا المنتج
//       const relatedVariants = sampleData.variants.filter((v) =>
//         v.shein_code.startsWith(
//           product.name.split(" ")[0].substring(0, 2).toUpperCase()
//         )
//       );

//       // إضافة المتغيرات المرتبطة
//       for (let variant of relatedVariants) {
//         const newVariant = new Variant({
//           ...variant,
//           productId: newProduct._id,
//         });
//         await newVariant.save();
//       }

//       console.log(
//         `Product ${newProduct.name} and its variants added successfully!`
//       );
//     }

//     console.log("All products and variants added successfully!");
//   } catch (error) {
//     console.error("Error adding products and variants:", error.message);
//   } finally {
//     mongoose.connection.close();
//   }
// };

// seedProducts();


const mongoose = require("mongoose");
const { Product, Variant } = require("./Models/Product");
const User = require("./Models/User");



const seedData = async () => {
  try {
    // Clear existing data
    await Product.deleteMany({});
    await Variant.deleteMany({});

    // Create a sample seller
    const seller = await User.findOne({ role: "seller" });
    if (!seller) {
      console.log("No seller found. Please create a seller user first.");
      process.exit(1);
    }

    // Sample products with variants
    const products = [
      {
        name: "Summer Dress",
        description: "A beautiful summer dress",
        category: "Women",
        subCategory: "Dresses",
        seller: seller._id,
        isUserSubmitted: true,
        variants: [
          {
            shein_code: "SW2023001",
            color: "Red",
            size: "S",
            price: 29.99,
            quantity: 50,
            overviewPicture: "https://example.com/summer-dress-red.jpg",
            images: [
              "https://example.com/summer-dress-red-1.jpg",
              "https://example.com/summer-dress-red-2.jpg",
            ],
          },
          {
            shein_code: "SW2023002",
            color: "Blue",
            size: "M",
            price: 29.99,
            quantity: 30,
            overviewPicture: "https://example.com/summer-dress-blue.jpg",
            images: [
              "https://example.com/summer-dress-blue-1.jpg",
              "https://example.com/summer-dress-blue-2.jpg",
            ],
          },
        ],
      },
      {
        name: "Casual T-Shirt",
        description: "Comfortable casual t-shirt",
        category: "Men",
        subCategory: "T-Shirts",
        seller: seller._id,
        isUserSubmitted: true,
        variants: [
          {
            shein_code: "MT2023001",
            color: "White",
            size: "L",
            price: 19.99,
            quantity: 100,
            overviewPicture: "https://example.com/tshirt-white.jpg",
            images: [
              "https://example.com/tshirt-white-1.jpg",
              "https://example.com/tshirt-white-2.jpg",
            ],
          },
          {
            shein_code: "MT2023002",
            color: "Black",
            size: "XL",
            price: 19.99,
            quantity: 80,
            overviewPicture: "https://example.com/tshirt-black.jpg",
            images: [
              "https://example.com/tshirt-black-1.jpg",
              "https://example.com/tshirt-black-2.jpg",
            ],
          },
        ],
      },
    ];

    for (const productData of products) {
      const { variants, ...productInfo } = productData;
      const product = new Product(productInfo);
      await product.save();

      for (const variantData of variants) {
        const variant = new Variant({
          ...variantData,
          productId: product._id,
        });
        await variant.save();
      }
    }

    console.log("Seed data inserted successfully");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    mongoose.disconnect();
  }
};

seedData();
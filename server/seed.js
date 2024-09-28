const mongoose = require("mongoose");
const connectDB = require("./Config/db"); // تأكد من تعديل المسار الصحيح
const Product = require("./Models/Product"); // تأكد من تعديل المسار الصحيح

const sampleProducts = [
  // Pants
  {
    name: "Classic Jeans",
    description: "Stylish classic jeans for everyday wear.",
    shein_code: "PJ001",
    price: 39.99,
    sizes: ["S", "M", "L"],
    colors: ["Blue", "Black"],
    overviewPicture: "https://example.com/images/classic_jeans.jpg",
    images: [
      "https://example.com/images/classic_jeans_1.jpg",
      "https://example.com/images/classic_jeans_2.jpg",
    ],
    quantity: 50,
    category: "Women",
    subCategory: "Pants",
  },
  {
    name: "Chino Trousers",
    description: "Comfortable chino trousers for a smart look.",
    shein_code: "PJ002",
    price: 44.99,
    sizes: ["M", "L", "XL"],
    colors: ["Beige", "Navy"],
    overviewPicture: "https://example.com/images/chino_trousers.jpg",
    images: [
      "https://example.com/images/chino_trousers_1.jpg",
      "https://example.com/images/chino_trousers_2.jpg",
    ],
    quantity: 30,
    category: "Women",
    subCategory: "Pants",
  },
  {
    name: "Cargo Pants",
    description: "Trendy cargo pants with multiple pockets.",
    shein_code: "PJ003",
    price: 49.99,
    sizes: ["S", "M", "L"],
    colors: ["Green", "Black"],
    overviewPicture: "https://example.com/images/cargo_pants.jpg",
    images: [
      "https://example.com/images/cargo_pants_1.jpg",
      "https://example.com/images/cargo_pants_2.jpg",
    ],
    quantity: 20,
    category: "Women",
    subCategory: "Pants",
  },
  {
    name: "Leggings",
    description: "Comfortable leggings for casual wear.",
    shein_code: "PJ004",
    price: 29.99,
    sizes: ["S", "M", "L"],
    colors: ["Black", "Gray"],
    overviewPicture: "https://example.com/images/leggings.jpg",
    images: [
      "https://example.com/images/leggings_1.jpg",
      "https://example.com/images/leggings_2.jpg",
    ],
    quantity: 40,
    category: "Women",
    subCategory: "Pants",
  },
  {
    name: "Palazzo Pants",
    description: "Flowy palazzo pants for a chic look.",
    shein_code: "PJ005",
    price: 39.99,
    sizes: ["M", "L"],
    colors: ["Red", "Blue"],
    overviewPicture: "https://example.com/images/palazzo_pants.jpg",
    images: [
      "https://example.com/images/palazzo_pants_1.jpg",
      "https://example.com/images/palazzo_pants_2.jpg",
    ],
    quantity: 25,
    category: "Women",
    subCategory: "Pants",
  },
  // Dress
  {
    name: "Summer Floral Dress",
    description: "A breezy dress perfect for summer outings.",
    shein_code: "DR001",
    price: 49.99,
    sizes: ["S", "M", "L"],
    colors: ["Pink", "Green"],
    overviewPicture: "https://example.com/images/summer_floral_dress.jpg",
    images: [
      "https://example.com/images/summer_floral_dress_1.jpg",
      "https://example.com/images/summer_floral_dress_2.jpg",
    ],
    quantity: 25,
    category: "Women",
    subCategory: "Dress",
  },
  {
    name: "Evening Gown",
    description: "Elegant evening gown for special occasions.",
    shein_code: "DR002",
    price: 89.99,
    sizes: ["M", "L"],
    colors: ["Black", "Red"],
    overviewPicture: "https://example.com/images/evening_gown.jpg",
    images: [
      "https://example.com/images/evening_gown_1.jpg",
      "https://example.com/images/evening_gown_2.jpg",
    ],
    quantity: 15,
    category: "Women",
    subCategory: "Dress",
  },
  {
    name: "Maxi Dress",
    description: "Comfortable maxi dress for a casual day out.",
    shein_code: "DR003",
    price: 54.99,
    sizes: ["S", "M", "L"],
    colors: ["Yellow", "Blue"],
    overviewPicture: "https://example.com/images/maxi_dress.jpg",
    images: [
      "https://example.com/images/maxi_dress_1.jpg",
      "https://example.com/images/maxi_dress_2.jpg",
    ],
    quantity: 30,
    category: "Women",
    subCategory: "Dress",
  },
  {
    name: "Wrap Dress",
    description: "Stylish wrap dress for a flattering fit.",
    shein_code: "DR004",
    price: 44.99,
    sizes: ["S", "M"],
    colors: ["Navy", "Floral"],
    overviewPicture: "https://example.com/images/wrap_dress.jpg",
    images: [
      "https://example.com/images/wrap_dress_1.jpg",
      "https://example.com/images/wrap_dress_2.jpg",
    ],
    quantity: 20,
    category: "Women",
    subCategory: "Dress",
  },
  {
    name: "Shift Dress",
    description: "Casual shift dress for everyday wear.",
    shein_code: "DR005",
    price: 39.99,
    sizes: ["S", "M", "L"],
    colors: ["Gray", "Black"],
    overviewPicture: "https://example.com/images/shift_dress.jpg",
    images: [
      "https://example.com/images/shift_dress_1.jpg",
      "https://example.com/images/shift_dress_2.jpg",
    ],
    quantity: 35,
    category: "Women",
    subCategory: "Dress",
  },
  // Shirt
  {
    name: "Casual Button-up Shirt",
    description: "A versatile shirt for casual and formal occasions.",
    shein_code: "SH001",
    price: 29.99,
    sizes: ["S", "M", "L"],
    colors: ["White", "Light Blue"],
    overviewPicture: "https://example.com/images/button_up_shirt.jpg",
    images: [
      "https://example.com/images/button_up_shirt_1.jpg",
      "https://example.com/images/button_up_shirt_2.jpg",
    ],
    quantity: 40,
    category: "Women",
    subCategory: "Shirt",
  },
  {
    name: "Graphic Tee",
    description: "Trendy graphic tee for casual wear.",
    shein_code: "SH002",
    price: 19.99,
    sizes: ["S", "M", "L"],
    colors: ["Black", "White"],
    overviewPicture: "https://example.com/images/graphic_tee.jpg",
    images: [
      "https://example.com/images/graphic_tee_1.jpg",
      "https://example.com/images/graphic_tee_2.jpg",
    ],
    quantity: 50,
    category: "Women",
    subCategory: "Shirt",
  },
  {
    name: "Chiffon Blouse",
    description: "Elegant chiffon blouse for office wear.",
    shein_code: "SH003",
    price: 34.99,
    sizes: ["S", "M"],
    colors: ["Cream", "Black"],
    overviewPicture: "https://example.com/images/chiffon_blouse.jpg",
    images: [
      "https://example.com/images/chiffon_blouse_1.jpg",
      "https://example.com/images/chiffon_blouse_2.jpg",
    ],
    quantity: 25,
    category: "Women",
    subCategory: "Shirt",
  },
  {
    name: "Sleeveless Top",
    description: "Casual sleeveless top for hot days.",
    shein_code: "SH004",
    price: 24.99,
    sizes: ["M", "L"],
    colors: ["Red", "Blue"],
    overviewPicture: "https://example.com/images/sleeveless_top.jpg",
    images: [
      "https://example.com/images/sleeveless_top_1.jpg",
      "https://example.com/images/sleeveless_top_2.jpg",
    ],
    quantity: 30,
    category: "Women",
    subCategory: "Shirt",
  },
  {
    name: "Flannel Shirt",
    description: "Cozy flannel shirt for layering.",
    shein_code: "SH005",
    price: 29.99,
    sizes: ["S", "M", "L"],
    colors: ["Plaid", "Navy"],
    overviewPicture: "https://example.com/images/flannel_shirt.jpg",
    images: [
      "https://example.com/images/flannel_shirt_1.jpg",
      "https://example.com/images/flannel_shirt_2.jpg",
    ],
    quantity: 20,
    category: "Women",
    subCategory: "Shirt",
  },
  // Skirt
  {
    name: "A-Line Skirt",
    description: "Elegant A-line skirt suitable for all occasions.",
    shein_code: "SK001",
    price: 34.99,
    sizes: ["S", "M", "L"],
    colors: ["Black", "Red"],
    overviewPicture: "https://example.com/images/a_line_skirt.jpg",
    images: [
      "https://example.com/images/a_line_skirt_1.jpg",
      "https://example.com/images/a_line_skirt_2.jpg",
    ],
    quantity: 20,
    category: "Women",
    subCategory: "Skirt",
  },
  {
    name: "Pencil Skirt",
    description: "Classic pencil skirt for a chic look.",
    shein_code: "SK002",
    price: 39.99,
    sizes: ["S", "M", "L"],
    colors: ["Gray", "Black"],
    overviewPicture: "https://example.com/images/pencil_skirt.jpg",
    images: [
      "https://example.com/images/pencil_skirt_1.jpg",
      "https://example.com/images/pencil_skirt_2.jpg",
    ],
    quantity: 25,
    category: "Women",
    subCategory: "Skirt",
  },
  {
    name: "Pleated Skirt",
    description: "Flowy pleated skirt for a feminine touch.",
    shein_code: "SK003",
    price: 44.99,
    sizes: ["S", "M"],
    colors: ["Blue", "Pink"],
    overviewPicture: "https://example.com/images/pleated_skirt.jpg",
    images: [
      "https://example.com/images/pleated_skirt_1.jpg",
      "https://example.com/images/pleated_skirt_2.jpg",
    ],
    quantity: 15,
    category: "Women",
    subCategory: "Skirt",
  },
  {
    name: "Wrap Skirt",
    description: "Stylish wrap skirt for a trendy look.",
    shein_code: "SK004",
    price: 39.99,
    sizes: ["M", "L"],
    colors: ["Floral", "Green"],
    overviewPicture: "https://example.com/images/wrap_skirt.jpg",
    images: [
      "https://example.com/images/wrap_skirt_1.jpg",
      "https://example.com/images/wrap_skirt_2.jpg",
    ],
    quantity: 10,
    category: "Women",
    subCategory: "Skirt",
  },
  // Pajamas
  {
    name: "Cotton Pajama Set",
    description: "Soft and cozy pajamas for a good night's sleep.",
    shein_code: "PJ006",
    price: 39.99,
    sizes: ["S", "M", "L"],
    colors: ["Gray", "Navy"],
    overviewPicture: "https://example.com/images/cotton_pajamas.jpg",
    images: [
      "https://example.com/images/cotton_pajamas_1.jpg",
      "https://example.com/images/cotton_pajamas_2.jpg",
    ],
    quantity: 15,
    category: "Women",
    subCategory: "Pajamas",
  },
  {
    name: "Silk Pajama Set",
    description: "Luxurious silk pajamas for a touch of elegance.",
    shein_code: "PJ007",
    price: 59.99,
    sizes: ["S", "M"],
    colors: ["Black", "Burgundy"],
    overviewPicture: "https://example.com/images/silk_pajamas.jpg",
    images: [
      "https://example.com/images/silk_pajamas_1.jpg",
      "https://example.com/images/silk_pajamas_2.jpg",
    ],
    quantity: 10,
    category: "Women",
    subCategory: "Pajamas",
  },
  {
    name: "Flannel Pajamas",
    description: "Warm flannel pajamas for colder nights.",
    shein_code: "PJ008",
    price: 34.99,
    sizes: ["S", "M", "L"],
    colors: ["Plaid", "Navy"],
    overviewPicture: "https://example.com/images/flannel_pajamas.jpg",
    images: [
      "https://example.com/images/flannel_pajamas_1.jpg",
      "https://example.com/images/flannel_pajamas_2.jpg",
    ],
    quantity: 20,
    category: "Women",
    subCategory: "Pajamas",
  },
  {
    name: "Yoga Pants Set",
    description: "Comfortable set for yoga and relaxation.",
    shein_code: "PJ009",
    price: 39.99,
    sizes: ["M", "L"],
    colors: ["Black", "Gray"],
    overviewPicture: "https://example.com/images/yoga_pants_set.jpg",
    images: [
      "https://example.com/images/yoga_pants_set_1.jpg",
      "https://example.com/images/yoga_pants_set_2.jpg",
    ],
    quantity: 15,
    category: "Women",
    subCategory: "Pajamas",
  },
  {
    name: "Graphic Pajama Set",
    description: "Fun graphic pajamas for playful nights.",
    shein_code: "PJ010",
    price: 29.99,
    sizes: ["S", "M"],
    colors: ["Pink", "White"],
    overviewPicture: "https://example.com/images/graphic_pajamas.jpg",
    images: [
      "https://example.com/images/graphic_pajamas_1.jpg",
      "https://example.com/images/graphic_pajamas_2.jpg",
    ],
    quantity: 30,
    category: "Women",
    subCategory: "Pajamas",
  },
];

const seedProducts = async () => {
  await connectDB(); // الاتصال بقاعدة البيانات

  try {
    // حذف جميع المنتجات الموجودة
    await Product.deleteMany({});
    console.log("Existing products deleted!");

    // إدخال المنتجات الجديدة
    await Product.insertMany(sampleProducts);
    console.log("Products added successfully!");
  } catch (error) {
    console.error("Error adding products:", error.message);
  } finally {
    mongoose.connection.close(); // إغلاق الاتصال بعد الانتهاء
  }
};

seedProducts();
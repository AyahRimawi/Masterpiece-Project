const express = require("express");
const router = express.Router();
const productController = require("../Controllers/productController");

// افترض أن لدينا middleware للمصادقة يسمى auth
const auth = require("../Middleware/auth");

router.post("/addProduct", auth, productController.addProduct);
router.get("/getAllProducts", productController.getAllProducts);
router.get("/getProductById/:id", productController.getProductById);
router.get("/getVariantById/:id", productController.getVariantById);
router.get("/getSizesForColor/:productId/:color", productController.getSizesForColor);
router.get("/getProductsByUser/:userId", auth, productController.getProductsByUser);
router.get("/getUserProducts", auth, productController.getUserProducts);


router.put("/softDeleteProduct/:id", auth, productController.softDeleteProduct);
router.put("/restoreProduct/:id", auth, productController.restoreProduct);

router.put("/updateProduct/:id", auth, productController.updateProduct);

router.get("/getProductsByCategory/:category", productController.getProductsByCategory);
router.get("/getProductsBySubCategory/:subCategory", productController.getProductsBySubCategory);
router.get(
  "/getProductsByCategoryAndSubCategory/:category/:subCategory",
  productController.getProductsByCategoryAndSubCategory
);
router.get("/search", productController.searchProducts);

module.exports = router;


//! postman ...
////////////////////////
//? addProduct .. POST
// * http://localhost:8080/api/product/addProduct

// {
//   "name": "Classic Suit",
//   "description": "A timeless suit for formal occasions.",
//   "category": "Men",
//   "subCategory": "Suit",
//   "variants": [
//     {
//       "shein_code": "CSU001-NAVY-40",
//       "color": "Navy",
//       "size": "40",
//       "price": 199.99,
//       "quantity": 10,
//       "overviewPicture": "http://example.com/navy-suit.jpg",
//       "images": ["http://example.com/navy-suit-1.jpg", "http://example.com/navy-suit-2.jpg"]
//     },
//     {
//       "shein_code": "CSU001-BLACK-42",
//       "color": "Black",
//       "size": "42",
//       "price": 199.99,
//       "quantity": 8,
//       "overviewPicture": "http://example.com/black-suit.jpg",
//       "images": ["http://example.com/black-suit-1.jpg", "http://example.com/black-suit-2.jpg"]
//     }
//   ]
// }

// * مع العلم لازم تحط بال header كلمة cookies وتكون مسجل دخول عشان ال token
////////////////////////
//? getAllProducts .. GET
//* http://localhost:8080/api/product/getAllProducts

////////////////////////
//? getProductById .. GET
//* http://localhost:8080/api/product/getProductById/{productId}

////////////////////////
//? getProductsByUser .. GET
//* http://localhost:8080/api/product/getProductsByUser/{userId}


////////////////////////

// ? updateProduct .. PUT
//* http://localhost:8080/api/product/updateProduct/{productId}

// {
//   "price": 24.99,
//   "quantity": 120
// }

/////////////////
//? softDeleteProduct .. put
//*http://localhost:8080/api/product/softDeleteProduct/{productId}
///////////////////////////

//? restoreProduct .. put

//* http://localhost:8080/api/product/restoreProduct/{productId}
//////////////

// ? getProductsByCategory .. GET
// * http://localhost:8080/api/product/getProductsByCategory/{category}
////////////////

// ? getProductsBySubCategory .. GET
// *http://localhost:8080/api/product/getProductsBySubCategory/{subCategory}

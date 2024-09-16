const express = require("express");
const router = express.Router();
const productController = require("../Controllers/productController");

// افترض أن لدينا middleware للمصادقة يسمى auth
const auth = require("../Middleware/auth");

router.post("/addProduct", auth, productController.addProduct);
router.get("/getAllProducts", productController.getAllProducts);
router.get("/getProductById/:id", productController.getProductById);
router.get("/getProductsByUser/:userId", auth, productController.getProductsByUser);

router.put("/softDeleteProduct/:id", auth, productController.softDeleteProduct);
router.put("/restoreProduct/:id", auth, productController.restoreProduct);

router.put("/updateProduct/:id", auth, productController.updateProduct);

router.get("/getProductsByCategory/:category", productController.getProductsByCategory);
router.get("/getProductsBySubCategory/:subCategory", productController.getProductsBySubCategory);

module.exports = router;


//! postman ...
////////////////////////
//? addProduct .. POST
//* http://localhost:8080/api/product/addProduct

// {
//   "name": "Example Product",
//   "description": "This is a sample product.",
//   "shein_code": "EX123",
//   "price": 19.99,
//   "sizes": ["S", "M", "L"],
//   "colors": ["Red", "Blue"],
//   "overviewPicture": "http://example.com/image.jpg",
//   "images": ["http://example.com/image1.jpg", "http://example.com/image2.jpg"],
//   "quantity": 100,
//   "category": "Women",
//   "subCategory": "Dress"
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
//* http://localhost:8080/api/product/getProductsByCategory/{category}
////////////////

// ? getProductsBySubCategory .. GET
//*http://localhost:8080/api/product/getProductsBySubCategory/{subCategory}

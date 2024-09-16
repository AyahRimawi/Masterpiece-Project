const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController");
const auth = require("../Middleware/auth");

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.post("/logout", userController.logoutUser);
router.get("/profile", auth, userController.getUserProfile);

module.exports = router;


//! postman ...
/////////
//? register .. POST
//* http://localhost:8080/api/users/register
////////
//? login .. POST
//* http://localhost:8080/api/users/login
////////
//? logout .. POST
//* http://localhost:8080/api/users/logout
////////
//? profile .. GET
//* http://localhost:8080/api/users/profile
// TODOO خلي ببالك في مكان لتشيك ع POSTMAN بخصوص ال COOKIES اعلى اليسار في COOKIES هلأ لحتى تعمل GIT بكل بساطة انت بحاجة تعبي ال HEADER بس حط مكان ال KEY ال Cookie اما بالنسبة لل VALUE هو بياخدها لحاله
////////
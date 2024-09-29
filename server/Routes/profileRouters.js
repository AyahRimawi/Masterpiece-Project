const express = require("express");
const router = express.Router();
const profileController = require("../Controllers/profileController");

const auth = require("../Middleware/auth");

router.get("/get-PersonalInfo", auth, profileController.getUserData);
router.put("/update-PersonalInfo", auth, profileController.updateUserData);

module.exports = router;

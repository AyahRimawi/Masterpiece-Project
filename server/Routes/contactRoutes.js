const express = require("express");
const router = express.Router();
const contactController = require("../Controllers/contactController");

router.post("/submit", contactController.submitContact);

module.exports = router;

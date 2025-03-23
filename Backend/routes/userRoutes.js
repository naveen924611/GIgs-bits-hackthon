const express = require("express");
const { registerUser, loginUser, getUserProfile } = require("../controllers/userController");

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.get("/:id", getUserProfile);

module.exports = router;

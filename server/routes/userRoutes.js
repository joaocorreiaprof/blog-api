const express = require("express");
const { postSignUp, loginUser } = require("../controllers/user");
const router = express.Router();

router.post("/signup", postSignUp);
router.post("/login", loginUser);

module.exports = router;

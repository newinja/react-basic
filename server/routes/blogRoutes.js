const express = require("express");
const router = express.Router();
const { create } = require("../controller/blogController");

router.get("/", create);

module.exports = router;

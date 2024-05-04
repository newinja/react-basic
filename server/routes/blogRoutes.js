const express = require("express");
const router = express.Router();
const {
  create,
  read,
  list,
  update,
  remove,
} = require("../controller/blogController");

router.get("/users/:id", read);
router.get("/users", list);
router.post("/users", create);
router.put("/users/:id", update);
router.delete("/users/:id", remove);

module.exports = router;

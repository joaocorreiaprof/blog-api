const express = require("express");
const {
  createPost,
  editPost,
  deletePost,
  displayAllPosts,
  getPostById,
} = require("../controllers/post");
const router = express.Router();

router.post("/create", createPost);
router.put("/edit/:id", editPost);
router.delete("/delete/:id", deletePost);
router.get("/display", displayAllPosts);
router.get("/:id", getPostById);

module.exports = router;

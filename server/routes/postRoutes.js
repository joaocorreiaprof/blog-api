const express = require("express");
const {
  createPost,
  editPost,
  deletePost,
  displayAllPosts,
} = require("../controllers/post");
const router = express.Router();

router.post("/", createPost);
router.put("/:id", editPost);
router.delete("/:id", deletePost);

module.exports = router;

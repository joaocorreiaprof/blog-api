const express = require("express");
const {
  createPost,
  editPost,
  deletePost,
  displayAllPosts,
} = require("../controllers/post");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/", auth, createPost);
router.put("/:id", auth, editPost);
router.delete("/:id", auth, deletePost);
router.get("/", displayAllPosts);

module.exports = router;

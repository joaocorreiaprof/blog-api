const express = require("express");
const {
  createComment,
  editComment,
  deleteComment,
  displayAllCommentsPerPost,
} = require("../controllers/comment");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/create", auth, createComment);
router.put("/:id", auth, editComment);
router.delete("/:id", auth, deleteComment);
router.get("/all-comments-per-post/:postId", displayAllCommentsPerPost);

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  createComment,
  editComment,
  deleteComment,
  displayAllCommentsPerPost,
} = require("../controllers/comment");

router.post("/", createComment);
router.put("/:id", editComment);
router.delete("/:id", deleteComment);
router.get("/post/:postId", displayAllCommentsPerPost);

module.exports = router;

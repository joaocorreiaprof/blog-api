const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  createComment: async (req, res) => {
    const { content, postId } = req.body;
    const userId = req.user.id;

    try {
      const newComment = await prisma.comment.create({
        data: {
          content,
          postId: parseInt(postId),
          userId,
        },
      });
      res.status(201).json(newComment);
    } catch (err) {
      console.error("Error creating comment:", err);
      res.status(500).send("An unexpected error occurred");
    }
  },

  editComment: async (req, res) => {
    const { id } = req.params;
    const { content } = req.body;

    try {
      const updatedComment = await prisma.comment.update({
        where: { id: parseInt(id) },
        data: { content },
      });
      res.status(200).json(updatedComment);
    } catch (err) {
      console.error("Error editing comment:", err);
      res.status(500).send("An unexpected error occurred");
    }
  },

  deleteComment: async (req, res) => {
    const { id } = req.params;

    try {
      await prisma.comment.delete({
        where: { id: parseInt(id) },
      });
      res.status(200).send("Comment deleted successfully");
    } catch (err) {
      console.error("Error deleting comment:", err);
      res.status(500).send("An unexpected error occurred");
    }
  },

  displayAllCommentsPerPost: async (req, res) => {
    const { postId } = req.params;

    try {
      const comments = await prisma.comment.findMany({
        where: { postId: parseInt(postId) },
        include: {
          user: true,
        },
      });
      res.status(200).json(comments);
    } catch (err) {
      console.error("Error fetching comments:", err);
      res.status(500).send("An unexpected error occurred");
    }
  },
};

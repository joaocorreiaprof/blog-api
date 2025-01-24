const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  createPost: async (req, res) => {
    const { title, content } = req.body;

    try {
      const newPost = await prisma.post.create({
        data: { title, content },
      });
      res.status(201).json(newPost);
    } catch (err) {
      console.error("Error creating post:", err);
      res.status(500).send("An unexpected error occurred");
    }
  },

  editPost: async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    try {
      const updatedPost = await prisma.post.update({
        where: { id: Number(id) },
        data: { title, content },
      });
      res.status(200).json(updatedPost);
    } catch (err) {
      console.error("Error updating post:", err);
      res.status(500).send("An unexpected error occurred");
    }
  },

  deletePost: async (req, res) => {
    const { id } = req.params;

    try {
      await prisma.post.delete({
        where: { id: Number(id) },
      });
      res.status(204).send();
    } catch (err) {
      console.error("Error deleting post:", err);
      res.status(500).send("An unexpected error occurred");
    }
  },

  displayAllPosts: async (req, res) => {
    try {
      const posts = await prisma.post.findMany();
      res.status(200).json(posts);
    } catch (err) {
      console.error("Error fetching posts:", err);
      res.status(500).send("An unexpected error occurred");
    }
  },
};

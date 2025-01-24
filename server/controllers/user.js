const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  postSignUp: async (req, res) => {
    const { username, email, password } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await prisma.user.create({
        data: { email, username, password: hashedPassword },
      });
      res.status(201).json(newUser);
    } catch (err) {
      console.error("Error creating user:", err);
      if (err.code === "P2002") {
        res.status(400).send("Email already exists");
      } else {
        res.status(500).send("An unexpected error occurred");
      }
    }
  },

  loginUser: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) {
        return res.status(404).send("User not found");
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).send("Invalid credentials");
      }

      res.status(200).json({ message: "Login successful" });
    } catch (err) {
      console.error("Error logging in:", err);
      res.status(500).send("An unexpected error occurred");
    }
  },
};

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const SECRET_KEY = process.env.SECRET_KEY;

module.exports = {
  postSignUp: async (req, res) => {
    console.log("Request body:", req.body);
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

      // Include `username` in the token payload
      const token = jwt.sign(
        { id: user.id, email: user.email, username: user.username },
        SECRET_KEY,
        { expiresIn: "1h" }
      );

      res.status(200).json({
        message: "Login successful",
        token,
        user: { id: user.id, email: user.email, username: user.username },
      });
    } catch (err) {
      console.error("Error logging in:", err);
      res.status(500).send("An unexpected error occurred");
    }
  },
};

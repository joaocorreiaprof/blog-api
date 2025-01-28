const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

// Import Routes
const userRoutes = require("../routes/userRoutes");
const postRoutes = require("../routes/postRoutes");
const commentRoutes = require("../routes/commentRoutes");

// Middleware
app.use(express.json());

// Sample route
app.get("/api", (req, res) => {
  res.json({ message: "Welcome to the API!" });
});

// App Uses
app.use(
  "/api/users",
  (req, res, next) => {
    console.log(`Received request at ${req.method} ${req.url}`);
    next();
  },
  userRoutes
);

app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);

// Serve static files from the client/dist directory
const clientBuildPath = path.join(__dirname, "../../client/dist"); // Adjust path for deployment
app.use(express.static(clientBuildPath));

// Handle all other routes with the frontend's index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(clientBuildPath, "index.html"));
  console.log("Static files served from:", clientBuildPath);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

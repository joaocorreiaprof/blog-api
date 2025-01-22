const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Sample route
app.get("/api", (req, res) => {
  res.json({ message: "Welcome to the API!" });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

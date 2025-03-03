const express = require("express");
const app = express();
const port = 3000;

// Basic route
app.get("/", (req, res) => {
  res.send("Hello, DevOps World! 🚀");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


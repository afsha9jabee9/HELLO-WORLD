const express = require("express");
const mongoose = require("mongoose");
const playerRoutes = require("./routes/players"); // ✅ this path is important

const app = express();
const port = 3000;

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/players", playerRoutes);

// start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

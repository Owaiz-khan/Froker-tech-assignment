const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/user", userRoutes);
app.use("/auth", authRoutes);

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/money-lending-app")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB", err));

// Starting Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

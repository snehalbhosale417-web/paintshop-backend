console.log("🔥 THIS FILE IS RUNNING");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Atlas Connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB Atlas Connected"))
  .catch(err => console.log("❌ DB Error:", err));

// Routes (NO folders)
const productRoutes = require("./products");
const orderRoutes = require("./orders");

app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Server Working ✅");
});

// Port fix for Render
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

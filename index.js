console.log("🔥 THIS FILE IS RUNNING");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve images
app.use("/images", express.static(path.join(__dirname, "../frontend/images")));

// ✅ CONNECT TO MONGODB ATLAS (CLOUD)
mongoose.connect("mongodb+srv://snehalbhosale417_db_user:Snehal2026Shop@cluster0.neuexg7.mongodb.net/paintshop")
  .then(() => console.log("✅ MongoDB Atlas Connected"))
  .catch(err => console.log("❌ DB Error:", err));

// Routes
const productRoutes = require("./routes/products");
const orderRoutes = require("./routes/orders");

app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Server Working ✅");
});

// Server start
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
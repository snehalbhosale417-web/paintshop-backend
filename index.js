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

// ✅ CONNECT TO MONGODB ATLAS (using environment variable)
mongoose.connect(process.env.MONGO_URL)
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

// ✅ Use Render port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

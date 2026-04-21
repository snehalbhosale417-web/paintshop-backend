const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  category: String
});

const Product = mongoose.model("Product", productSchema);


router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});


router.post("/", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});


router.delete("/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});


router.put("/:id", async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Updated" });
});

module.exports = router;
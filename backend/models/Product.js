const mongoose = require("mongoose")
// to define the product schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  stock: Number
})

module.exports = mongoose.model("Product", productSchema)

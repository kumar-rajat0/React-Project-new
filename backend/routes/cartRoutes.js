const router = require("express").Router()
const Cart = require("../models/Cart")
const Product = require("../models/Product")
const auth = require("../middleware/authMiddleware")
//post request on / path
router.post("/", auth, async (req, res) => {
  const { productId } = req.body

  const product = await Product.findById(productId)
  if (!product) {
    return res.status(404).json({ message: "Product not found" })
  }

  const cartItem = await Cart.create({ productId, quantity: 1 })
  res.json(cartItem)
})
// to update using the put request
router.put("/:id", auth, async (req, res) => {
  const { quantity } = req.body

  if (quantity < 1) {
    return res.status(400).json({ message: "Quantity must be at least 1" })
  }

  const item = await Cart.findByIdAndUpdate(
    req.params.id,
    { quantity },
    { new: true }
  )

  res.json(item)
})
//to delete by id
router.delete("/:id", auth, async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id)
  res.json({ message: "Item removed from cart" })
})

module.exports = router

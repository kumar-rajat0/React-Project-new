const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/shoppyglobe")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err))

app.use("/api/products", require("./routes/productRoutes"))
app.use("/api/cart", require("./routes/cartRoutes"))
app.use("/api/auth", require("./routes/authRoutes"))

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message })
})

app.listen(5000, () => {
  console.log("Server running on port 5000")
})

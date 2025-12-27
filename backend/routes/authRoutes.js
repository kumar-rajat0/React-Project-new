const router = require("express").Router()
const jwt = require("jsonwebtoken")
const User = require("../models/User")

const SECRET = "shoppyglobe_secret_key"
// post request to register path
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body

  const userExists = await User.findOne({ email })
  if (userExists) {
    return res.status(400).json({ message: "User already exists" })
  }
// to insert a user
  const user = await User.create({ name, email, password })
  res.json({ message: "User registered successfully" })
})
//post req to login path
router.post("/login", async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email, password })
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" })
  }
//to create a token
  const token = jwt.sign({ id: user._id }, SECRET)
  res.json({ token })
})

module.exports = router

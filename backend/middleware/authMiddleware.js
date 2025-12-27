const jwt = require("jsonwebtoken")
const SECRET = "shoppyglobe_secret_key"

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization
// unauthorized access does not access the data
  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" })
  }

  const token = authHeader.split(" ")[1]
  const decoded = jwt.verify(token, SECRET)

  req.user = decoded.id
  next()
}

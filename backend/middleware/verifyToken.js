const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  try {
    const authHeader = req.header("Authorization");

    if (!authHeader) {
      return res.status(401).json({ message: "Access denied. No token." });
    }

    const token = authHeader.split(" ")[1]; // Bearer tokenString

    if (!token) {
      return res.status(401).json({ message: "Token missing." });
    }

    const verified = jwt.verify(token, "insta");  // same secret used in login
    req.user = verified;

    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid Token" });
  }
};

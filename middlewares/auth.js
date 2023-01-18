const jwt = require("jsonwebtoken");
function auth(req, res, next) {
  const token = req.header("x-token");
  if (!token) return res.status(401).send("Access Denied");
  try {
    const decoded = jwt.verify(token, "resource");
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).send("Invalid Token");
  }
}
module.exports = auth;

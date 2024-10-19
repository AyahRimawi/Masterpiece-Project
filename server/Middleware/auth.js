const jwt = require("jsonwebtoken");
const User = require("../Models/User");

const authMiddleware = async function (req, res, next) {
  // const token = req.cookies.token;
  const token =
    req.cookies.token || req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    console.log("No token provided");
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  // try {
  //       console.log("Verifying token:", token);
  //   const decoded = jwt.verify(token, process.env.JWT_SECRET);
  //   req.user = decoded.user;
  //   next();
  // } catch (err) {
  //   res.status(401).json({ message: "Token is not valid" });
  // }

  try {
    console.log("Verifying token from cookie");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.user.id).select("-password");

    if (!user) {
      return res.status(401).json({ msg: "User not found" });
    }

    req.user = user;
    console.log("User authenticated:", user.email, "Role:", user.role);
    next();
  } catch (err) {
    console.error("Token verification failed:", err);
    res.status(401).json({ msg: "Token is not valid" });
  }
};

module.exports = authMiddleware;

const express = require("express");
const cors = require("cors");
const connectDB = require("./Config/db");
const cookieParser = require("cookie-parser");
// ============
const userRoutes = require("./Routes/userRouters");
const productRoutes = require("./Routes/productRouters");
// ============

const app = express();

require("dotenv").config();

app.use(
  cors({
    // origin: process.env.FRONTEND_URL,
    origin: true,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

connectDB();

// -------Routes-----------
app.use("/api/users", userRoutes);
app.use("/api/product", productRoutes);

// -----------------------------

//////////////////
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});
////////////////

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

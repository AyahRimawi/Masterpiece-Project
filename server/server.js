const express = require("express");
const cors = require("cors");
const connectDB = require("./Config/db");

const app = express();

require("dotenv").config();

app.use(cors());
app.use(express.json());

connectDB();

// -------habitRoutes-----------

// -----------------------------

const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require("express");
const cors = require("cors");
const app = express();
const connectDb = require("./config/DbConnection");
const errorHandler = require("./middlewares/errorHandler");
const dotenv = require("dotenv").config();
const port = process.env.port;

app.use(express.json());
app.use(cors());
connectDb();
app.use("/api/products", require("./routes/productRoutes"));
app.use(errorHandler);

app.listen(port);

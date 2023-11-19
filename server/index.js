const connectDb = require("./config/DbConnection");

const errorHandler = require("./middlewares/errorHandler");
const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.port;

app.use(express.json());
connectDb();
app.use("/api/products", require("./routes/productRoutes"));
app.use(errorHandler);

app.listen(port);

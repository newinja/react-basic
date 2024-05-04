const express = require("express");
const cors = require("cors");
const mysql = require("./config/db");

require("dotenv").config();

const port = process.env.PORT;
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());

const blogRoutes = require("./routes/blogRoutes");

app.use("/api", blogRoutes);

app.listen(port, () => {
  console.log("Server On Port", port);
});

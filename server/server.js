const express = require("express");
const cors = require("cors");

require("dotenv").config();
const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

const blogRoutes = require("./routes/blogRoutes");
app.use("/api", blogRoutes);

app.listen(port, () => {
  console.log("Server On Port", port);
});

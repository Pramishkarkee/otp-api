const express = require("express");

const dotenv = require("dotenv");
const router = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleWares/ErrorMiddleware");

const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.use(cors());
dotenv.config();

app.use("", router);

app.get("/", (req, res) => {
  res.send("API is running.....");
});
app.use(notFound);
app.use(errorHandler);
app.listen(PORT, console.log(`Server on ${PORT}`));

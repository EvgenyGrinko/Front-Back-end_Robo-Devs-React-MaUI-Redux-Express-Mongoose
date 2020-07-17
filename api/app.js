const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");


dotenv.config({ path: "./config/config.env" });

connectDB();

const transactions = require("./routes/transactions");

const app = express();

app.use(bodyParser.json());
app.use(express.json());


app.use("/api/v1/transactions", transactions);

app.use(
  express.static(path.join("/home/user/Desktop/robo-developers/client/"))
);


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

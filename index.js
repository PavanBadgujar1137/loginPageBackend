const express = require("express");
const app = express();

require("dotenv").config();

const database = require("./config/database");
database(); // Initialize the database connection

app.use(express.json());

const loginRoutes = require("./routes/login");
app.use("/api/v1", loginRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`App is running successfully at ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("HI JI How are you all...");
});

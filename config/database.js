const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.BATABASE_URL)
    .then(() => {
      console.log("Db Connection Successfully....");
    })
    .catch((err) => {
      console.log("DB Connection Isuue");
    });
};

module.exports = dbConnect;

const mongoose = require("mongoose");

const LOGIN = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    maxLength: 20,
  },
  lname: {
    type: String,
    required: true,
    maxLength: 20,
  },
  email: {
    type: String,
    required: true,
    maxLength: 50,
  },
  mobileNo: {
    type: Number,
    required: true,
    maxLength: 20,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Login", LOGIN);

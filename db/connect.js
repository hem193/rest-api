const mongoose = require("mongoose");

const connectDB = (uri) => {
  return mongoose.connect(uri, () => {
    console.log("connected db");
  });
};

module.exports = connectDB;

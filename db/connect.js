const mongoose = require("mongoose");

const connectDB = (uri) => {
  mongoose.set("strictQuery", false);
  //   console.log("connected to db");
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("hello,Everybody");
});

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`${PORT} I am live and running`);
    });
  } catch {
    console.log(error);
  }
};

start();

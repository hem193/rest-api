const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/products");

app.get("/", (req, res) => {
  res.send("hello,Everybody");
});

//middleware
app.use("/api/products", products_routes);
// app.use("/api/products", products_routes);

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

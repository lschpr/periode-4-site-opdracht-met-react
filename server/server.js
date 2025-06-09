const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const products = [
  { id: 1, name: "Dark Souls 1", price: 39.99 },
  { id: 2, name: "Dark Souls 2", price: 39.99 },
  { id: 3, name: "Dark Souls 3", price: 39.99 },
  { id: 4, name: "Bloudborne", price: 39.99 },
  { id: 5, name: "Elden Ring", price: 59.99 },
  { id: 6, name: "Sekiro", price: 49.99 },
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});

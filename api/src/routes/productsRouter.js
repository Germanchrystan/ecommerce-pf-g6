const server = require("express").Router();
const {
  addProducts,
  getProducts
} = require("../controllers/productController");

// ------------------- ROUTE PRODUCTS ------------------

server.post('/', addProducts);
server.get('/', getProducts)




module.exports = server;
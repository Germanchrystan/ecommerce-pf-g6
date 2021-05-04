const server = require("express").Router();
const {
  getAllProducts
  
} = require("../controllers/productController");

// ------------------- ROUTE PRODUCTS ------------------

//Get --> Mostrar todos los productos
server.get("/", getAllProducts);







module.exports = server;
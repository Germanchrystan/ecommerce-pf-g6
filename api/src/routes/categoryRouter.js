const server = require("express").Router();
const {
    addCategories,
    getCategories  
} = require("../controllers/categoryController");

// ------------------- ROUTE PRODUCTS ------------------

server.post('/', addCategories );
server.get('/', getCategories)




module.exports = server;
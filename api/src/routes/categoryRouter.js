const server = require("express").Router();
const {
    addCategories,
    getCategories,
    deleteCategory,
    updateCategory
} = require("../controllers/categoryController");

// ------------------- ROUTES Categories ------------------

server.post('/', addCategories );
server.get('/', getCategories);
server.put('/:id', updateCategory);
server.delete('/:id', deleteCategory);


module.exports = server;
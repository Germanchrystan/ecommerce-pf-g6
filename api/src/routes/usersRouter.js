const server = require("express").Router();
const {
    addUsers,
    getUsers
} = require("../controllers/userController");

//-------------------------Route Users-------------------//

server.post('/', addUsers);
server.get('/', getUsers);



module.exports = server;
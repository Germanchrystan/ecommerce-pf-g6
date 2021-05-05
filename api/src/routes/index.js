const { Router } = require("express");
const router = Router();

// import all routers;
const productRouter = require("./productsRouter");
const userRouter = require("./usersRouter");

// load each router on a route
// ejemplo
router.use("/products", productRouter);
router.use("/users", userRouter);



module.exports = router;
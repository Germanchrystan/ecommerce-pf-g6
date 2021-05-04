const { Router } = require("express");
const router = Router();

// import all routers;
const productRouter = require("./productsRouter");

// load each router on a route
// ejemplo
router.use("/products", productRouter);



module.exports = router;
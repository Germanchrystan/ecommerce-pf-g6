const { Router } = require("express");
const router = Router();

// import all routers;
const productRouter = require("./productsRouter");
const categoryRouter = require('./categoryRouter')

// load each router on a route
// ejemplo
router.use("/products", productRouter); // Ex: http://localhost:3001/products ... para probar ruta
router.use('/categories', categoryRouter) // Ex: http://localhost:3001/categories ... para probar ruta
// router.use('/user', userRouter)


module.exports = router;
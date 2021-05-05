const Product = require('./../models/Product');

 
const addProducts = async (req, res) => {
  const { name } = req.body;
  console.log(req.body)
  if (!req.body ) {
    res.status(403).end();
  }

  const newProduct = new Product(req.body);
  console.log(newProduct)
  

  await newProduct.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ product: saved });
  });
}


const getProducts = async (req, res) => {
  const product = await Product.find()
  console.log(product)
  res.send(product)
}


module.exports =  {addProducts, getProducts}
   

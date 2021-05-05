const Category = require('./../models/Category');

 
const addCategories = async (req, res) => {
  const { name, description} = req.body;
  console.log(req.body)

  if (!req.body ) {
    res.status(403).end();
  }

  const newCategory = new Category(req.body);
  console.log(newCategory)
  

  await newCategory.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ category: saved });
  });
}


const getCategories = async (req, res) => {
  const category = await Category.find()
  console.log(category)
  res.send(category)
}


module.exports =  {
    addCategories,
    getCategories
}
   

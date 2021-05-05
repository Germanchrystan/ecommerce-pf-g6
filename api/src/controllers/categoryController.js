const Category = require('./../models/Category');
const asyncHandler = require('express-async-handler');


// @desc    Create a category
// @route   POST /localhost:3001/categories
// @access  Private/Admin
const addCategories = asyncHandler(async (req, res) => {
  const { name, description } = req.body;

  if (!req.body ) {
    res.status(403).end();
  }
  const newCategory = new Category({
    name: name,
    description: description
   
  })
  

  await newCategory.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ category: saved });
  });
})



// @desc    Get all categories with pagination
// @route   GET /localhost:3001/categories
// @access  Private/Admin
const getCategories = asyncHandler(async (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

  const count = await Category.countDocuments({ ...keyword })
  const categories = await Category.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ categories, page, pages: Math.ceil(count / pageSize) })
})

// @desc    Update a product
// @route   PUT /categories/:id
// @access  Private/Admin
const updateCategory = asyncHandler(async (req, res) => {
  const {
    name,
    description,
  } = req.body

  const category = await Category.findById(req.params.id)

  if (category) {
    category.name = name
    category.description = description
    const updatedCategory = await category.save()
    res.json(updatedCategory)
  } else {
    res.status(404)
    throw new Error('Category not found')
  }
})

// @desc    Delete a category by id
// @route   DELETE /categories/:id
// @access  Private/Admin
const deleteCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id)

  if (category) {
    await category.remove()
    res.json({ message: 'Category removed' })
  } else {
    res.status(404)
    throw new Error('Category not found')
  }
})

module.exports =  {
    addCategories,
    getCategories,
    deleteCategory,
    updateCategory
}
   

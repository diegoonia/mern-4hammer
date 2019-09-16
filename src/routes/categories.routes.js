const express = require('express');
const router = express.Router();

const Category = require('../models/category')

router.get('/', async (req, res) => {
   const categories = await Category.find();
   res.json(categories);
});

router.get('/:id', async (req, res) => {
    const category = await Category.findById(req.params.id);
    res.json(category);
 });

router.post('/', async (req, res) => {
    const { title, description } = req.body;
    const category = new Category({title,description});
    await category.save();
    res.json({status: 'Category saved'});
});

router.put('/:id', async (req, res) => {
    const { title, description } = req.body;
    const newCategory = {title, description};
    await Category.findByIdAndUpdate(req.params.id, newCategory);
    res.json({status: 'Category Updated'});
})

router.delete('/:id', async (req, res) => {
    await Category.findByIdAndDelete(req.params.id);
    res.json({status: 'Category Deleted'});
})

module.exports = router;
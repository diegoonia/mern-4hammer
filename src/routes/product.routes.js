const express = require('express');
const router = express.Router();

const Product = require('../models/product')

router.get('/', async (req, res) => {
   const products = await Product.find();
   res.json(products);
});

router.get('/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
 });

router.post('/', async (req, res) => {
    const { title, description } = req.body;
    const product = new Product({title,description});
    await product.save();
    res.json({status: 'Product saved'});
});

router.put('/:id', async (req, res) => {
    const { title, description } = req.body;
    const newProduct = {title, description};
    await Product.findByIdAndUpdate(req.params.id, newProduct);
    res.json({status: 'Product Updated'});
})

router.delete('/:id', async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({status: 'Product Deleted'});
})

module.exports = router;
const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Float32Array, required: true}
})

module.exports = mongoose.model('Product', ProductSchema);
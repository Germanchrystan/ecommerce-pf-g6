// modelo db con mongo
const { ObjectID } = require('bson');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String, 
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  img: {
    type: Object,
    required: true
  },
  size: {
    type: Array,
    requred: true
  },
  color: {
    typ: Array,
    required: true
  }
  
});

module.exports = mongoose.model('Product', productSchema);


const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, required: true },
  details: { type: String, required: true },
  category: { type: String, required: true },
  quantity: { type: Number, required: true },
  supplier: { type: String, required: true },
  rating: { type: Number, required: true },
  inStock: { type: Boolean, required: true }
});

module.exports = mongoose.model('Item', itemSchema);




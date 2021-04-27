const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: Object,
    required: true,
  },
  orderedItems: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model('Orders', orderSchema);

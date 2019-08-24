const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ecommerceSchema = new Schema({
  id: {
    type: String
  },
  title: {
    type: String
  },
  rate: {
    type: Number
  },
  description: {
    type: String
  },
  price: {
    type: String
  },
  brand: {
    type: String
  },
  detail_product: {
    type: String
  },
  image: {
    type: String
  }
});

module.exports = mongoose.model('Ecommerce', ecommerceSchema);

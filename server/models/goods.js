var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    "product": String,
    "productName": String,
    "salePrice": Number,
    "productImage": String
})

module.exports = mongoose.model('Good', productSchema);


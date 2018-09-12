const mongoose = require('mongoose');

const Schema = mongoose.Schema

const productSchema = new Schema({
    name : {
        type : String,
        required : true 
    },
    price : {
        type : Number,
        required: true
    },
    description : {
        type : String,
        required : true
    },
    category : {
        type : Schema.Types.ObjectId,
        ref : 'Category'
    },
    codEligible: {
        type : Boolean,
        required : true
    },
    stock : {
        type : Number,
        required : true
    }
})

const Product = mongoose.model('Product',productSchema)
module.exports = { Product }
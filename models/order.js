const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    orderDate : {
        type : Date,
        default : Date.now
    },
    orderNo : {
        type : String,
        required : true
    },
    user : {
        type : Schema.Types.ObjectId,
        ref: 'User'
    },
    OrderLineItems : [{
        product : {
            type : Schema.Types.ObjectId,
            ref : 'Product'
        },
        quantity : {
            type : Number
        },
        price : {
            type : Number
        }
    }],
    total : {
        type : Number
    }
})

const Order = mongoose.model('Order',orderSchema);

module.exports = { Order }

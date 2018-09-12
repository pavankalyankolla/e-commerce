const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username : {
        type : String,
        required : true
    },
    password  : {
        type : String,
        required : true,
        minlength : 6,
        maxlength : 128
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    mobile : {
        type : String,
        required : true
    },
    role : {
        type : String,
        enum : ['admin','customer'],
        required : true
    }
    // cartItems : [{
            // product : {
            //     type : Schema.Types.ObjectId
            // }
    // }]
    // reviews : [{
    //     type : Schema.Types.ObjectId
    // }]
})

const User = mongoose.model('User',userSchema);

module.exports = { User }
const express = require('express');

const { User } = require('../models/users');

const router = express.Router();

// router.get('/',(req,res) => {
//     res.send({
//         notice : 'Welcome to user route'
//     })
// })


module.exports = {
    userRouter : router
}